import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Leaf',
    title: 'Системы возобновляемой энергии',
    description: 'Проектирование и внедрение солнечных, ветровых и гибридных энергосистем для бизнеса. Снижение выбросов CO₂ до 80% и сокращение затрат на электроэнергию.',
  },
  {
    icon: 'Droplets',
    title: 'Водоочистные технологии',
    description: 'Современные биологические и мембранные системы очистки воды. Внедрение замкнутых циклов водопользования с эффективностью до 95%.',
  },
  {
    icon: 'Recycle',
    title: 'Управление отходами',
    description: 'Комплексные решения по переработке промышленных и бытовых отходов. Технологии компостирования и пиролиза с извлечением вторичных ресурсов.',
  },
  {
    icon: 'Trees',
    title: 'Зелёное строительство',
    description: 'Сертификация LEED и BREEAM. Энергоэффективные здания с пассивным охлаждением и вертикальным озеленением.',
  },
];

const team = [
  {
    name: 'Анна Соколова',
    position: 'Генеральный директор',
    description: 'Эксперт в области возобновляемой энергетики. 15+ лет опыта в реализации крупных экопроектов.',
    image: 'https://cdn.poehali.dev/projects/3ac830e8-5b96-4011-8849-676f7d05e41c/files/edf45390-1dcd-4d22-9879-a08fd03addba.jpg',
  },
  {
    name: 'Дмитрий Волков',
    position: 'Главный инженер',
    description: 'Специалист по водоочистным технологиям. Автор 20+ патентов в области экологической инженерии.',
    image: 'https://cdn.poehali.dev/projects/3ac830e8-5b96-4011-8849-676f7d05e41c/files/af13f846-73db-4d46-a86c-48312e8083b1.jpg',
  },
  {
    name: 'Елена Морозова',
    position: 'Директор по устойчивому развитию',
    description: 'Сертифицированный аудитор LEED. Руководитель проектов зелёной сертификации международного уровня.',
    image: 'https://cdn.poehali.dev/projects/3ac830e8-5b96-4011-8849-676f7d05e41c/files/a8d51ef4-de4a-4e5c-9b53-2ead645fa55e.jpg',
  },
];

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Leaf" className="text-primary" size={28} />
              <span className="text-xl font-bold text-foreground">ЭкоТехнологии</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">
                Команда
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')}>Связаться</Button>
          </div>
        </div>
      </nav>

      <section className={`pt-32 pb-20 px-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Icon name="Sprout" size={20} />
            <span className="text-sm font-medium">Технологии для устойчивого будущего</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Экологичные решения<br />для вашего бизнеса
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Внедряем передовые экотехнологии, которые снижают углеродный след, сокращают затраты и помогают достичь ESG-целей
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('services')} className="gap-2">
              Наши услуги <Icon name="ArrowRight" size={20} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Наша миссия</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ЭкоТехнологии создаёт инновационные решения для устойчивого развития бизнеса. Мы верим, что экономическая эффективность и забота об окружающей среде идут рука об руку.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                С 2015 года мы помогли более 200 предприятиям перейти на экологичные технологии, сократив их суммарные выбросы CO₂ на 150 000 тонн в год.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150k</div>
                  <div className="text-sm text-muted-foreground">Тонн CO₂</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Icon name="Award" className="text-primary mb-2" size={32} />
                  <CardTitle className="text-lg">Сертификация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Аккредитация ISO 14001 и партнёрство с LEED</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Icon name="Users" className="text-primary mb-2" size={32} />
                  <CardTitle className="text-lg">Команда</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">50+ экспертов в области экоинжиниринга</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Icon name="TrendingUp" className="text-primary mb-2" size={32} />
                  <CardTitle className="text-lg">Эффективность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">До 40% экономии энергоресурсов</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Icon name="Shield" className="text-primary mb-2" size={32} />
                  <CardTitle className="text-lg">Гарантии</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Полное сопровождение проектов и техподдержка</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные экотехнологические решения для промышленности, строительства и инфраструктуры
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon name={service.icon as any} className="text-primary group-hover:text-white transition-colors" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксперты с международным опытом и научными степенями в экологии и инженерии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Заполните форму, и мы ответим в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Расскажите о вашем проекте"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-sm text-muted-foreground">г. Москва, ул. Экологическая, д. 42, офис 301</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">info@ecotech.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Время работы</p>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={48} className="text-primary/60 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Интерактивная карта</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" size={24} />
                <span className="text-lg font-bold">ЭкоТехнологии</span>
              </div>
              <p className="text-sm text-gray-400">Инновационные решения для устойчивого развития</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('team')} className="hover:text-white transition-colors">Команда</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Возобновляемая энергия</li>
                <li className="hover:text-white transition-colors cursor-pointer">Водоочистка</li>
                <li className="hover:text-white transition-colors cursor-pointer">Переработка отходов</li>
                <li className="hover:text-white transition-colors cursor-pointer">Зелёное строительство</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@ecotech.ru</li>
                <li>г. Москва, ул. Экологическая, 42</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ЭкоТехнологии. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}