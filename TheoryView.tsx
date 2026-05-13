import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Zap, AlertTriangle, Plane, Info } from 'lucide-react';

interface TheoryViewProps {
  onBack: () => void;
}

export default function TheoryView({ onBack }: TheoryViewProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 pb-32">
      <header className="text-center space-y-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 font-bold uppercase text-[10px] tracking-widest hover:text-indigo-600 transition-colors mx-auto"
        >
          <ArrowLeft className="w-4 h-4" /> ԵՏ ԳԼԽԱՎՈՐ ՄԵՆՅՈՒ
        </button>
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Ճամփորդության <span className="text-indigo-600">Կանոններ</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">
            Viajar en Español: Gramática y Uso
          </p>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <TheoryCard 
          title="1. TENER QUE + Infinitive" 
          subtitle="Անձնական պարտավորություն"
          icon={<Zap className="w-10 h-10 text-amber-500" />}
          description="Օգտագործում ենք, երբ կա կոնկրետ մարդ, ով պետք է ինչ-որ բան անի։"
          items={[
            { es: "Yo tengo que viajar", hy: "Ես պետք է ճամփորդեմ" },
            { es: "Գոռ tiene que comprar", hy: "Գոռը պետք է գնի" },
            { es: "Գայանե tiene que hacer", hy: "Գայանեն պետք է անի" },
            { es: "Nosotros tenemos que ir", hy: "Մենք պետք է գնանք" },
          ]}
        />

        <TheoryCard 
          title="2. HAY QUE + Infinitive" 
          subtitle="Ընդհանուր անդեմ պարտավորություն"
          icon={<AlertTriangle className="w-10 h-10 text-indigo-500" />}
          description="Օգտագործում ենք ընդհանուր կանոնների կամ խորհուրդների համար (առանց կոնկրետ անձի)։"
          items={[
            { es: "Hay que pagar", hy: "Պետք է վճարել" },
            { es: "Hay que ser puntual", hy: "Պետք է լինել ճշտապահ" },
            { es: "Hay que validar el ticket", hy: "Պետք է վավերացնել տոմսը" },
            { es: "Hay que llevar pasaporte", hy: "Պետք է վերցնել անձնագիր" },
          ]}
        />

        <TheoryCard 
          title="3. NECESITAR + Noun/Infinitive" 
          subtitle="Կարիք ունենալ"
          icon={<Plane className="w-10 h-10 text-rose-500" />}
          description="Օգտագործում ենք, երբ մեզ ինչ-որ իր կամ օգնություն է պետք։"
          items={[
            { es: "Necesito un mapa", hy: "Ինձ քարտեզ է պետք" },
            { es: "Necesitas ayuda", hy: "Քեզ օգնություն է պետք" },
            { es: "Necesitamos un hotel", hy: "Մեզ հյուրանոց է պետք" },
            { es: "Necesitáis equipaje", hy: "Ձեզ ուղեբեռ է պետք" },
          ]}
        />

        <TheoryCard 
          title="Ամփոփում" 
          subtitle="Ինչպես տարբերել"
          icon={<Info className="w-10 h-10 text-purple-500" />}
          description="Հիշիր այս երեք հիմնական կետերը՝"
          items={[
            { es: "Tener que", hy: "Ես/Դու/Նա պարտավոր ենք" },
            { es: "Hay que", hy: "Ընդհանուր առմամբ պետք է" },
            { es: "Necesitar", hy: "Ունենալ ինչ-որ բանի կարիք" },
          ]}
        />
      </div>

      <section className="bg-rose-50 rounded-[4rem] p-8 sm:p-12 border-4 border-rose-100 space-y-8">
        <div className="flex items-center gap-4">
           <AlertTriangle className="w-12 h-12 text-rose-500" />
           <h2 className="text-3xl font-black text-rose-900 uppercase italic">ՍՈՎՈՐԱԿԱՆ ՍԽԱԼՆԵՐ</h2>
        </div>
        <p className="text-rose-700 font-bold">Այս ձևերը Իսպաներենում սխալ են:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Necesito que viajar", "Hay que el pasaporte", "Tener que comer", "Necesito un taxi", "Tengo un hotel"].map(err => (
            <div key={err} className="bg-white p-6 rounded-3xl border-2 border-rose-200 text-rose-500 font-black line-through text-center shadow-sm">
              {err}
            </div>
          ))}
        </div>
        <div className="bg-white p-8 rounded-3xl border-2 border-rose-200">
           <p className="text-slate-900 font-black uppercase text-xs mb-4">Պետք է ասել՝</p>
           <ul className="grid sm:grid-cols-2 gap-2 text-emerald-600 font-bold">
              <li>✅ Tengo que viajar (ոչ թե Necesito que)</li>
              <li>✅ Necesito el pasaporte (ոչ թե Hay que el)</li>
              <li>✅ Hay que comer (Պետք է ուտել - ընդհանուր)</li>
           </ul>
        </div>
      </section>
    </div>
  );
}

function TheoryCard({ title, subtitle, icon, description, items }: { title: string, subtitle: string, icon: React.ReactNode, description: string, items: {es: string, hy: string}[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[40px] p-8 shadow-xl border-2 border-slate-50 space-y-6 relative overflow-hidden group"
    >
      <div className="flex items-center gap-4">
        <div className="p-4 bg-slate-50 rounded-3xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">{title}</h3>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{subtitle}</p>
        </div>
      </div>

      <p className="text-slate-500 text-sm font-medium leading-relaxed">{description}</p>

      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
            <span className="font-black text-slate-900 text-lg">{item.es}</span>
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider font-inter">{item.hy}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

