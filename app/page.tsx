import Image, { StaticImageData } from "next/image";
import profileImage from "/public/images/me.png";
import anomaly1Image from "/public/images/anomalia1.png";
import overquotesImg from "/public/images/overquotes.png";
import oversheetImg from "/public/images/oversheet.png";

// Tipos definidos para armazenar informações
interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface Book {
  title: string;
  releaseDate: string;
  description: string;
  link: string;
  image: StaticImageData;
  sagaName?: string;
  bookNumberInSaga?: number;
}

interface App {
  name: string;
  description: string;
  platform: string;
  link: string;
  image: StaticImageData;
}

// Dados para a página
const experiences: Experience[] = [
  {
    title: "Engenheiro de Software II",
    company: "Conta Simples",
    duration: "2024 - presente",
    description: "Como engenheiro na equipe de Operações Financeiras, sou responsável pela infraestrutura e arquitetura principal de todos os serviços relacionados a pagamentos. Isso inclui integrações com empresas de pagamento terceirizadas e bancos. Meu foco principal é nos serviços da AWS, incluindo Lambdas, DynamoDB, EC2, RDS e Cognito. Sou proficiente em linguagens de programação como TypeScript, além de ferramentas como Serverless e Docker."
  },
  {
    title: "Engenheiro de Software II",
    company: "Cobli",
    duration: "2023 - 2024",
    description: "Como engenheiro na equipe de Telemetria de Vídeo, o principal produto da empresa, colaboro com Inteligência Artificial e Computação de Borda para oferecer capacidades de rastreamento de veículos que capturam inúmeros eventos de direção em tempo real. Minhas responsabilidades principais incluem projetar a arquitetura de comunicação e mensagens do produto e construir a arquitetura de aplicações orientadas a eventos, capazes de processar mais de um milhão de eventos por hora."
  },
  {
    title: "Enenheiro de Software I",
    company: "Cobli",
    duration: "2022 - 2023",
    description: "Como engenheiro na equipe de Ecossistemas e Integrações, colaboro no desenvolvimento de APIs com base nos princípios de API First e Padrões de Design de API. Minhas responsabilidades incluem projetar e implementar arquiteturas de API, planejar contratos de API e construir APIs. Além disso, gerencio integrações de usuários e integro softwares com aplicativos de terceiros para melhorar a integração dos clientes dentro do nosso marketplace."
  },
  {
    title: "Analista Desenvolvedor de Software I",
    company: "4YouSee Digital Signage",
    duration: "2020 - 2022",
    description: "Como desenvolvedor de software, minhas principais responsabilidades incluíam integrar serviços de terceiros na infraestrutura de software da empresa. Além disso, fui responsável por desenvolver aplicativos web integrados, adaptados às necessidades dos clientes, garantindo a manutenção contínua e aprimoramento dos sistemas de software da empresa."
  },
  {
    title: "Estagiário de desenvolvimento",
    company: "4YouSee Digital Signage",
    duration: "2019 - 2020",
    description: "Como trainee, minhas responsabilidades incluíam manter o software da empresa e desenvolver aplicativos web integrados para clientes."
  },
  {
    title: "Projetista de Automação",
    company: "Departamento de Engenharia Nuclear UFMG",
    duration: "2018 - 2018",
    description: "Automação de um sensor de Radiação"
  },
  {
    title: "Desenvolvedor Web",
    company: "Autônomo",
    duration: "2015 - 2017",
    description: "Vendia serviços independentes de páginas web sob demanda."
  },
];

const books: Book[] = [
  {
    title: "Alma Intangível",
    releaseDate: "Janeiro 2025",
    description: `Em um mundo transformado por um evento cataclísmico que remodelou a natureza e a sociedade, os poucos humanos que restaram vivem enclausurados em colônias, onde liberdade é uma ilusão e o controle do governo é absoluto. Enquanto os avanços tecnológicos pertencem somente à elite governamental, nas sombras desse regime cruel, começam a surgir indivíduos com habilidades que desafiam os limites da humanidade — e despertam o medo.
                  \nMatthew, um jovem que vive escondido para proteger sua vida e a de seu pai, luta para sobreviver em meio à repressão de um sistema que caça e extermina aqueles considerados “anômalos”. Mas quando o destino de sua família e sua própria existência entram em risco, ele é forçado a confrontar não apenas os perigos externos, mas também os mistérios que envolvem sua verdadeira natureza.
                  \nUma história intensa e carregada de suspense, Alma Intangível explora os dilemas da sobrevivência, a busca por identidade e o impacto de um poder que transcende o que é conhecido. Acompanhe uma jornada de resistência, autodescoberta e esperança em um mundo que tenta sufocar tudo isso.`,
    link: "https://www.amazon.com.br/Alma-Intang%C3%ADvel-Anomalia-Matheus-Santos/dp/6525497477/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9._af-RFOlcLUaLWdqHKVrqxz9j4rBHNFAzIe8ljqGftBxhddrlUaz25T_t3Iu3o4i8XRlQZjSC7t5tAQtD_6YFg.74ErWXUHFRIBxbdyzeV-DrZn9MGYKIJ3srIHOJbVYek&qid=1733180236&sr=1-1",
    image: anomaly1Image,
    sagaName: "A Anomalia",
    bookNumberInSaga: 1
  },
];

const apps: App[] = [
  {
    name: "Overquotes",
    description: "Gerencie seus clientes, serviços e orçamentos com facilidade e segurança!",
    platform: "iOS",
    link: "https://apps.apple.com/br/app/overquotes/id6738586960?l=en-GB",
    image: overquotesImg
  },
  {
    name: "Oversheet",
    description: "Mantenha seus personagens de RPG atualizados durante suas sessões, de forma intuitiva e pensada para seu conforto!",
    platform: "iOS",
    link: "https://apps.apple.com/br/app/oversheet/id6738495641?l=en-GB",
    image: oversheetImg
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-stretch w-full">
        <section className="flex flex-col gap-4 w-full border-[3px] border-gray-800 rounded-lg p-4 transition-colors duration-300 hover:border-white">
        <Image
          src={profileImage}
          alt="Minha Foto"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold">Matheus Vieira dos Santos</h1>
          <p>Sou um Engenheiro de Software, graduado pela PUC Minas, atuando como engenheiro de software desde 2022, mas, como desenvolvedor de software, desde 2017.</p>
          <p>Sou nativo em <b>Português</b>, possuo <b>Ingles</b> avançado, <b>Espanhol</b> intermediário e estudo <b>Alemão</b> e <b>Italiano</b>.</p>
          <p>Me tornei oficialmente um autor de livros, tendo meu primeiro livro: Alma Intangível já publicado e mais algumas ideias já engatilhadas para o futuro.</p>
          <p>Faço parte do programa de desenvolvedores Apple, tendo permissão para publicar aplicativos na Apple Store. Meus aplicativos publicados estão listados mais abaixo nesta página.</p>
          <br />
          <div>
            <a href="www.linkedin.com/in/matheus-vsantos" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out my-[8px] mt-[8px]">LinkedIn</a> &nbsp;&nbsp;
            <a href="https://www.amazon.com.br/stores/Matheus-Vieira-dos-Santos/author/B0DPGTWTBZ?asin=B0DPGTWTBZ&isDramIntegrated=true&shoppingPortalEnabled=true" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out my-[8px] mt-[8px]">Autor Amazon</a> &nbsp;&nbsp;
          </div>
       </div>
        </section>
        <section className="flex flex-col gap-4 w-full border-[3px] border-gray-800 rounded-lg p-4 transition-colors duration-300 hover:border-white">
          <h2 className="text-2xl font-bold">Políticas de Privacidade</h2>
          <ul className="list-disc pl-6">
            <li>Coleta de Dados: Os aplicativos operam completamente offline, apenas fazendo backups na iCloud, nenhum dado é coletado.</li>
            <li>Segurança: Implementamos medidas de segurança para proteger os dados dos usuários.</li>
            <li>Direitos do Usuário: Os usuários têm o direito de inserir, visualizar, corrigir ou excluir suas informações.</li>
            <li>Segurança: É obrigatório o uso dos aplicativos sob a premissa da legalidade. Sendo proibido o uso de cópias ilegais dos aplicativos ou o uso destes para fins ilegais.</li>
          </ul>
        </section>
        <div className="flex flex-col gap-8 w-full sm:flex-row sm:flex-nowrap">
        <section className="flex flex-col gap-4 w-full sm:w-1/2 border-[3px] border-gray-800 rounded-lg p-4 transition-colors duration-300 hover:border-white flex-1">
          <h2 className="text-2xl font-bold">Livros</h2>
          <ul className="list-disc pl-6">
            {books.map((book, index) => (
              <li key={index} className="flex items-start gap-4">
                <Image src={book.image} alt={book.title} width={60} height={60} className="rounded-lg" />
                <div>
                  <h3 className="font-semibold">{book.title}</h3>
                  {book.sagaName && <p className="italic">Saga: {book.sagaName} - Livro {book.bookNumberInSaga}</p>}
                              <p>Lançamento: {book.releaseDate}</p>
                              <p>{book.description}</p>
                  <br/>
                  <a href={book.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out my-[8px] mt-[8px]">Comprar</a>
                  <br />
                  <br />
                  {(index < books.length -1) && <><hr/><br/></>}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 w-full sm:w-1/2 border-[3px] border-gray-800 rounded-lg p-4 transition-colors duration-300 hover:border-white">
          <h2 className="text-2xl font-bold">Aplicativos</h2>
          <ul className="list-disc pl-6">
            {apps.map((app, index) => (
              <li key={index} className="flex items-start gap-4">
                <Image src={app.image} alt={app.name} width={60} height={60} className="rounded-lg" />
                <div>
                  <h3 className="font-semibold">{app.name}</h3>
                              <p>{app.description}</p>
                              <p>Plataforma: {app.platform}</p>
                  
                  <br />
                  <a href={app.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out my-[8px] mt-[8px]">Confira na loja!</a>
                  <br />
                  <br />
                  {(index < apps.length -1) && <><hr/><br/></>}
                </div>
              </li>
            ))}
          </ul>
        </section>
        </div>
        <section className="flex flex-col gap-4 w-full border-[3px] border-gray-800 rounded-lg p-4 transition-colors duration-300 hover:border-white mt-8">
          <h2 className="text-2xl font-bold">Experiência Profissional</h2>
          <ul className="list-disc pl-6">
            {experiences.map((exp, index) => (
              <li key={index}>
                <h3 className="font-semibold">{exp.title} - {exp.company}</h3>
                <p>{exp.duration}</p>
                <p>{exp.description}</p>
                <br />
                {(index < experiences.length -1) && <><hr/><br/></>}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>&copy; 2024 Matheus Vieira dos Santos</p>
      </footer>
    </div>
  );
}
