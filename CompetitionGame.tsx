import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Flag, 
  RotateCcw, 
  ArrowLeft, 
  ChevronRight,
  User,
  Zap,
  Plane,
  Camera,
  MapPin,
  Backpack
} from 'lucide-react';
import { TRAVEL_DATA, TravelChallenge } from './travelData';

interface CompetitionGameProps {
  onBack: () => void;
}

type Player = 'Gor' | 'Gayane';

export default function CompetitionGame({ onBack }: CompetitionGameProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState({ Gor: 0, Gayane: 0 });
  const [positions, setPositions] = useState({ Gor: 0, Gayane: 0 });
  const [currentPlayer, setCurrentPlayer] = useState<Player>('Gor');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing');

  const currentChallenge = TRAVEL_DATA[currentIdx];

  const handleChoice = (choice: string) => {
    if (isSubmitted) return;
    const correct = choice.toLowerCase() === currentChallenge.correct.toLowerCase();
    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      setScores(s => ({ ...s, [currentPlayer]: s[currentPlayer] + 1 }));
      setPositions(p => ({ ...p, [currentPlayer]: p[currentPlayer] + 1 }));
    }
  };

  const handleNext = () => {
    if (currentIdx < TRAVEL_DATA.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setCurrentPlayer(prev => prev === 'Gor' ? 'Gayane' : 'Gor');
      setIsSubmitted(false);
      setIsCorrect(null);
    } else {
      setGameState('result');
    }
  };

  const winner = scores.Gor > scores.Gayane ? 'Gor' : 
                 scores.Gayane > scores.Gor ? 'Gayane' : 'Draw';

  const resetGame = () => {
    setCurrentIdx(0);
    setScores({ Gor: 0, Gayane: 0 });
    setPositions({ Gor: 0, Gayane: 0 });
    setCurrentPlayer('Gor');
    setIsSubmitted(false);
    setIsCorrect(null);
    setGameState('playing');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 pb-32 overflow-hidden">
      {gameState === 'playing' ? (
        <div className="space-y-8">
          {/* Header & Stats */}
          <div className="flex justify-between items-center bg-white p-6 rounded-[2.5rem] shadow-xl border-4 border-slate-50">
             <button onClick={onBack} className="p-3 bg-slate-100 rounded-2xl hover:bg-indigo-100 text-slate-500 hover:text-indigo-600 transition-all">
                <ArrowLeft />
             </button>
             
             <div className="flex gap-12 items-center">
                <PlayerStat name="Գոռ" score={scores.Gor} active={currentPlayer === 'Gor'} color="bg-blue-500" />
                <div className="w-1 h-12 bg-slate-100 rounded-full" />
                <PlayerStat name="Գայանե" score={scores.Gayane} active={currentPlayer === 'Gayane'} color="bg-rose-500" />
             </div>

             <div className="bg-indigo-600 text-white px-6 py-2 rounded-full font-black italic text-sm">
                ԽԱՂ {currentIdx + 1}/20
             </div>
          </div>

          {/* 3D Race Track Simulation */}
          <div className="relative h-64 w-full bg-slate-900 rounded-[3rem] overflow-hidden border-8 border-slate-800 shadow-2xl perspective-[1000px]">
             {/* Track Lanes */}
             <div className="absolute inset-0 flex flex-col justify-around py-4 rotate-x-[30deg]">
                <div className="h-1 bg-slate-700 w-full" />
                <div className="h-20 w-full relative flex items-center">
                   <div className="absolute left-0 right-0 h-[2px] border-t-2 border-dashed border-white/20" />
                   <Character 
                     name="Գոռ" 
                     pos={positions.Gor} 
                     total={10} 
                     color="bg-blue-500" 
                     icon={<Camera className="text-white w-4 h-4" />}
                   />
                </div>
                <div className="h-4 w-full bg-emerald-500/20" />
                <div className="h-20 w-full relative flex items-center">
                   <div className="absolute left-0 right-0 h-[2px] border-t-2 border-dashed border-white/20" />
                   <Character 
                     name="Գայանե" 
                     pos={positions.Gayane} 
                     total={10} 
                     color="bg-rose-500" 
                     icon={<Plane className="text-white w-4 h-4" />}
                   />
                </div>
                <div className="h-1 bg-slate-700 w-full" />
             </div>
             
             {/* Finish Line */}
             <div className="absolute right-12 top-0 bottom-0 w-8 bg-[repeating-conic-gradient(#fff_0_90deg,#000_0_180deg)] bg-[length:16px_16px] border-x-4 border-slate-800" />
          </div>

          {/* Question Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className={`p-8 sm:p-16 rounded-[4rem] border-8 shadow-2xl space-y-12 relative overflow-hidden transition-colors ${
                currentPlayer === 'Gor' ? 'border-blue-100 bg-white' : 'border-rose-100 bg-white'
              }`}
            >
              <div className="text-center space-y-4">
                 <div className={`inline-block px-8 py-2 rounded-full text-white font-black uppercase text-xs tracking-[0.3em] ${
                   currentPlayer === 'Gor' ? 'bg-blue-500' : 'bg-rose-500'
                 }`}>
                    ՀԵՐԹԸ {currentPlayer === 'Gor' ? 'ԳՈՌԻՆՆ' : 'ԳԱՅԱՆԵԻՆՆ'} Է
                 </div>
                 <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
                    {currentChallenge.sentence.split('___').map((p, i) => (
                      <React.Fragment key={i}>
                         {p}
                         {i === 0 && (
                           <span className={`inline-block min-w-[150px] border-b-8 mx-2 text-center transition-all ${
                             isSubmitted ? (isCorrect ? 'text-emerald-500 border-emerald-500' : 'text-rose-500 border-rose-500') : 'text-indigo-400 border-indigo-100'
                           }`}>
                              {isSubmitted ? currentChallenge.correct : "___"}
                           </span>
                         )}
                      </React.Fragment>
                    ))}
                 </h2>
                 <p className="text-slate-400 font-bold uppercase italic text-sm">{currentChallenge.translation}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                 {currentChallenge.options.map(opt => (
                   <button
                     key={opt}
                     disabled={isSubmitted}
                     onClick={() => handleChoice(opt)}
                     className={`p-8 rounded-[2.5rem] border-4 text-xl font-black italic tracking-tighter transition-all ${
                       isSubmitted && opt === currentChallenge.correct 
                         ? 'bg-emerald-500 border-emerald-600 text-white translate-y-[-10px] shadow-2xl'
                         : isSubmitted && opt !== currentChallenge.correct
                         ? 'bg-slate-100 border-slate-200 text-slate-400 opacity-50'
                         : 'bg-white border-slate-100 hover:border-indigo-500 hover:translate-y-[-5px] shadow-lg text-slate-900'
                     }`}
                   >
                      {opt}
                   </button>
                 ))}
              </div>

              {isSubmitted && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-center border-t-2 border-slate-50 pt-8">
                   <div className={`p-6 rounded-3xl font-bold ${isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
                      {currentChallenge.explanation}
                   </div>
                   <button 
                     onClick={handleNext}
                     className="bg-slate-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-black transition-all group flex items-center gap-4 mx-auto"
                   >
                      ՅԱՌԱՋ <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        /* Result Screen */
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-[4rem] p-12 sm:p-20 shadow-2xl border-4 border-indigo-50 text-center space-y-12"
        >
           <Trophy className={`w-32 h-32 mx-auto ${winner === 'Draw' ? 'text-slate-400' : winner === 'Gor' ? 'text-blue-500' : 'text-rose-500'}`} />
           <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-slate-900">
                 {winner === 'Draw' ? 'ՈՉ-ՈՔԻ' : winner === 'Gor' ? 'ՀԱՂԹԵՑ ԳՈՌԸ!' : 'ՀԱՂԹԵՑ ԳԱՅԱՆԵՆ!'}
              </h2>
              <div className="bg-slate-50 p-8 rounded-3xl grid grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <p className="text-blue-500 font-black text-4xl">{scores.Gor}</p>
                    <p className="text-xs font-bold uppercase text-slate-400">Գոռ</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-rose-500 font-black text-4xl">{scores.Gayane}</p>
                    <p className="text-xs font-bold uppercase text-slate-400">Գայանե</p>
                 </div>
              </div>
           </div>
           
           <div className="flex flex-col gap-4">
              <button 
                onClick={resetGame}
                className="bg-indigo-600 text-white py-6 rounded-3xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3"
              >
                 <RotateCcw /> ՆՈՐԻՑ ՓՈՐՁԵԼ
              </button>
              <button 
                onClick={onBack}
                className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em] pt-4"
              >
                 ԵՏ ԳԼԽԱՎՈՐ ՄԵՆՅՈՒ
              </button>
           </div>
        </motion.div>
      )}
    </div>
  );
}

function PlayerStat({ name, score, active, color }: { name: string, score: number, active: boolean, color: string }) {
  return (
    <div className={`flex items-center gap-4 transition-all ${active ? 'scale-110' : 'opacity-40 grayscale blur-[1px]'}`}>
       <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${color}`}>
          <User />
       </div>
       <div>
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{name}</p>
          <p className="text-3xl font-black text-slate-900">{score}</p>
       </div>
    </div>
  );
}

function Character({ name, pos, total, color, icon }: { name: string, pos: number, total: number, color: string, icon: React.ReactNode }) {
  const left = (pos / total) * 80 + 5; // offset slightly from start/end
  return (
    <motion.div 
      animate={{ left: `${left}%` }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="absolute top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1"
    >
       <div className={`w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center border-2 border-white/20 transform rotate-45 ${color}`}>
          <div className="-rotate-45">
             {icon}
          </div>
       </div>
       <span className="text-[8px] font-black text-white uppercase bg-black/50 px-2 rounded-full whitespace-nowrap">{name}</span>
    </motion.div>
  );
}
