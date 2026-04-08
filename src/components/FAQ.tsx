import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import dynamic from 'next/dynamic';
import { motion, useInView } from 'motion/react';

// Dynamic import for icons to improve performance
const HelpCircle = dynamic(() => import('lucide-react').then(mod => mod.HelpCircle), { ssr: false });

export function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: 'Как записаться на прием?',
      answer: 'Записаться можно несколькими способами: через форму на нашем сайте (доступна 24/7), по телефону +7 (495) 123-45-67 или лично в регистратуре клиники. Онлайн-запись — самый быстрый способ, вы сразу видите свободное время и можете выбрать удобного специалиста.'
    },
    {
      question: 'Какие документы нужны для первого визита?',
      answer: 'Для первого визита необходимы: паспорт, полис ОМС (если планируете использовать), СНИЛС. Если у вас есть результаты предыдущих обследований или выписки от других врачей, возьмите их с собой — это поможет врачу составить более полную картину вашего здоровья.'
    },
    {
      question: 'Работаете ли вы по полису ОМС?',
      answer: 'Да, мы работаем по полису ОМС по ряду услуг. Однако многие специализированные услуги и диагностика предоставляются на платной основе. Уточнить, какие услуги доступны по ОМС, можно по телефону или в регистратуре.'
    },
    {
      question: 'Можно ли вызвать врача на дом?',
      answer: 'Да, мы предоставляем услугу вызова врача на дом. Доступны выезды терапевта и педиатра. Стоимость выезда зависит от района и времени суток. Для вызова врача звоните по телефону +7 (495) 123-45-67.'
    },
    {
      question: 'Как быстро можно получить результаты анализов?',
      answer: 'Сроки готовности анализов зависят от типа исследования: общий анализ крови — в тот же день, биохимия — 1-2 дня, специализированные анализы — до 5-7 дней. Результаты отправляются вам на email и доступны в личном кабинете на сайте.'
    },
    {
      question: 'Есть ли у вас программы для постоянных пациентов?',
      answer: 'Да, у нас действует программа лояльности для постоянных пациентов. После оформления клиентской карты вы получаете скидку 10% на все услуги, а также специальные предложения на комплексные программы обследования. Также доступна семейная программа со скидками для всех членов семьи.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем наличные, банковские карты (Visa, MasterCard, МИР), а также предоставляем возможность оплаты в рассрочку для дорогостоящих процедур. Оплата возможна как в клинике, так и онлайн через сайт.'
    }
  ];

  return (
    <section 
      id="faq" 
      className="py-20 gradient-bg-soft relative overflow-hidden" 
      ref={ref}
      aria-labelledby="faq-title"
    >
      {/* Decorative Element */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.header 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#A8E6CF] to-[#007BFF] rounded-2xl mb-4 shadow-lg">
              <HelpCircle className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
            <h2 id="faq-title" className="text-2xl font-bold mb-2">Часто задаваемые вопросы</h2>
            <p className="text-[#5A6C7D]">
              <span className="accent-text text-xl block text-[#007BFF] mb-2">
                "Мы здесь, чтобы помочь вам"
              </span>
              Ответы на популярные вопросы о работе клиники и наших услугах
            </p>
          </motion.header>

          <Accordion type="single" collapsible className="space-y-4" role="list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="glass rounded-2xl px-6 border-0 shadow-sm hover:shadow-lg transition-all"
                  role="listitem"
                >
                  <AccordionTrigger className="text-left text-[#2C3E50] hover:text-[#007BFF] hover:no-underline py-6">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5A6C7D] leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div 
            className="mt-8 glass p-8 rounded-2xl shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-[#5A6C7D] mb-2">Не нашли ответ на свой вопрос?</p>
            <p className="text-[#2C3E50] font-semibold">
              Звоните нам:{' '}
              <a 
                href="tel:+74951234567" 
                className="text-[#007BFF] hover:text-[#0056b3] transition-colors underline decoration-2 underline-offset-4"
              >
                +7 (495) 123-45-67
              </a>
            </p>
            <p className="text-sm text-[#5A6C7D] mt-2">
              Или оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}