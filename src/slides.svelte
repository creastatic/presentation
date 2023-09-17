<script lang="ts">
  import { Presentation, Slide, Stack, Step } from '@components'
  import {InfoIcon, LayersIcon, ThumbsUpIcon, ToolIcon, UsersIcon, AwardIcon, EyeIcon, DollarSignIcon, FilterIcon, LogInIcon, LogOutIcon, HelpCircleIcon, Share2Icon} from 'svelte-feather-icons'
</script>

<Presentation>
  <Slide animate class="flex font-default">
    <div class="flex">
      <div class=" p-5 ">
        <img class="w-[40vw] rounded-full"
          src="https://res.cloudinary.com/dwvmkvvrl/image/upload/v1694876883/g1kyh34lgk3ub06znbjg.png"
          alt="" />
      </div>
      <div style="text-shadow: 0 10px 20px black;"
        class="bg-[#758BFD] w-full flex items-center justify-center font-bold m-10 rounded-b-xl">
        <p class="text-6xl font-highlight font-light">CREASTATIC</p> <sup class="text-sm text-[#758BFD]">&copy</sup>
      </div>
    </div>
    <div class="p-10">
      <h2 class="font-bold font-header text-5xl">CONHEÇA A NOSSA PROPOSTA</h2>
    </div>
    
    <span class="py-10 text-xl flex items-center justify-center gap-5 overline text-blue-400">
      <InfoIcon /> Deslize para a esquerda ou clique no botão do canto inferior direito para passar os slides
    </span>
  </Slide>
  <!--<Slide animate>-->
  <!--  <div class="gap-20">-->
  <!--    <h2 class="font-bold m-10 flex justify-center items-center text- gap-5 text-5xl">-->
  <!--      CONTEXTUALIZANDO...-->
  <!--    </h2>-->
  <!--    <div class="p-5 m-10 rounded-b-xl bg-[#758BFD]">-->
        <!--<ul style="text-shadow: 0 10px 20px black;" class="flex text-xl gap-5 p-5">-->
        <!--  <li>1. O que somos</li>-->
        <!--  <li>2. Estrutura</li>-->
        <!--  <li>4. Análise SWOT</li>-->
        <!--  <li>3. Missão, Visão e Valores</li>-->
        <!--  <li>5. Informações Adicionais</li>-->
        <!--  <li>6. Equipe</li>-->
        <!--</ul>-->
  <!--      <ul class="p-5 gap-10">-->
  <!--        <li class="flex items-center justify-center"> <span class="p-5 m-5 rounded-full bg-blue-600"></span> Conceitos-->
  <!--          básicos</li>-->
  <!--        <li class="flex items-center justify-center"> <span class="p-5 m-5 rounded-full bg-green-600"></span>-->
  <!--          Conceitos tecnicos</li>-->
  <!--      </ul>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--</Slide>-->
  <Slide animate>
    <div class="gap-20">
      <h2 style="text-shadow: 0 10px 20px blue;"
        class="font-bold m-10 flex justify-center items-center text-blue-600 font-header gap-5 text-5xl">
        <UsersIcon size="40" />O QUE SOMOS?
      </h2>
      <div class="p-5 m-10 rounded-b-xl bg-[#758BFD]">
        <h3 style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl">
          A CREASTATIC é uma empresa virtual <span class="font-highlight font-light" >E-business</span>, aberta sempre a evolução e ao profissionalismo. Nós somos uma
          empresa com foco na criação de web apps estáticos, e viemos para resolver um problema muito comum no mundo
          web: "A falta de profissionalismo e progressividade em sites estáticos"
        </h3>
      </div>
    </div>
  </Slide>
  <Slide animate>
    <div class="gap-20">
      <h2 style="text-shadow: 0 10px 20px blue;"
        class="font-bold m-10 flex justify-center items-center font-header text-blue-600 gap-5 text-5xl">
        <UsersIcon size="40" />O QUE SOMOS?
      </h2>
      <div class="p-5 m-10 rounded-b-xl bg-[#758BFD]">
        <h3 style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl">
          <span class="font-highlight font-light " >PROFISSIONALISMO</span> é a palavra chave de nossos produtos e serviços. Nossas criações são modernas e
          profissionais tal como nossa missão, visão e valores são baseadas nestes aspectos
        </h3>
      </div>
    </div>
  </Slide>
  
  <Slide animate>
    <div class="">
      <div class="flex flex-col justify-center scroll-x-scroll">
        <h2 style="text-shadow: 0 10px 20px blue;"
          class="font-bold m-10 flex justify-center items-center text-blue-600 gap-5 text-5xl font-header">
          <AwardIcon size="40" />MISSÃO
        </h2>
        <div class="p-5 m-10 rounded-b-xl bg-[#758BFD]">
          <h3 style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl">Agregar valor aos clientes com websites estáticos belos e profissionais, com um serviço de   <span class="font-highlight font-light" >QUALIDADE</span> e muito
            rentável
          </h3>
        </div>
      </div>
    </div>
  </Slide>
  <Slide animate>
    <div class="">
      <div class="flex flex-col justify-center scroll-x-scroll">
        <h2 style="text-shadow: 0 10px 20px blue;"
          class="font-bold m-10 flex justify-center items-center text-blue-600 gap-5 text-5xl font-header">
          <EyeIcon size="40" />VISÃO
        </h2>
        <div class="p-5 m-10 rounded-b-xl bg-[#758BFD]">
          <h3 style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl">
            Estar dentre as principais empresas de desenvolvimento web, assim trazendo relevância a marca e assim elevar nossa             <span class="font-highlight font-light" >INDENTIDADE </span> para o próximo nível
          </h3>
        </div>
      </div>
    </div>
  </Slide>
  <Slide animate>
    <div class="">
      <div class="flex flex-col justify-center scroll-x-scroll">
        <h2 style="text-shadow: 0 10px 20px blue;"
          class="font-bold m-10 flex justify-center items-center text-blue-600 gap-5 text-5xl font-header">
          <DollarSignIcon size="40" />VALORES
        </h2>
        <div class="p-5 m-10 rounded-b-xl bg-[#758BFD]">
          <h3 style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl">
            Produtividade, Profissionalismo, Modernidade, Proatividade, Responsabilidade, Conectividade e Adaptabilidade
          </h3>
        </div>
      </div>
    </div>
  </Slide>
  
  <Slide animate>
    <div class="">
      <div class="flex flex-col justify-center scroll-x-scroll">
        <h2 style="text-shadow: 0 10px 20px blue;"
          class="font-bold m-10 flex justify-center items-center text-blue-600 gap-5 text-5xl font-header">
          <LogInIcon size="40" />SWOT INTERNA
        </h2>
        <div class="flex justify-center items-center gap-5">
          <div class="flex flex-col justify-center items-center flex rounded-b-xl bg-[#758BFD]">
            <h1 class="p-5 text-5xl font-highlight">STRENGTHS <br />-<br />  <span>forças</span></h1>
            <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-3xl flex flex-col gap-5">
              <li>1. COMPROMETIMENTO</li>
              <li>2. PROFISSIONALISMO</li>
              <li>3. ADAPTAPTABILIDADE</li>
              <li>4. MODERNIDADE</li>
            </ol>
          </div>
          
          <div class="flex flex-col justify-center items-center flex rounded-b-xl bg-[#758BFD]">
            <h1 class="p-5 text-5xl font-highlight">WEAKNESS <br />-<br />  <span>fraquesas</span></h1>
            <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-3xl flex flex-col gap-5">
              <li>1. ACESSIBILIDADE</li>
              <li>2. COMUNICAÇÃO</li>
              <li>3. COMPATIBILIDADE</li>
              <li>4. CONFIABILIDADE</li>
            </ol>
          </div>
          
        </div>
      </div>
    </div>
  </Slide>
  <Slide animate>
    <div class="">
      <div class="flex flex-col justify-center scroll-x-scroll">
        <h2 style="text-shadow: 0 10px 20px blue;"
          class="font-bold m-10 flex justify-center items-center text-blue-600 gap-5 text-5xl font-header">
          <LogOutIcon size="40" />SWOT EXTERNA
        </h2>
        <div class="flex justify-center items-center gap-5">
          <div class="flex flex-col justify-center items-center flex rounded-b-xl bg-[#758BFD]">
            <h1 class="p-5 text-5xl font-highlight">OPORTUNITIES <br />-<br />  <span>oportunidades</span></h1>
            <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-3xl flex flex-col gap-5">
              <li>1. LEADS</li>
              <li>2. CONTRATAÇÕES</li>
              <li>3. EVOLUÇÃO</li>
              <li>4. INVESTIMENTO</li>
            </ol>
          </div>
          
          <div class="flex flex-col justify-center items-center flex rounded-b-xl bg-[#758BFD]">
            <h1 class="p-5 text-5xl font-highlight">THREATS <br />-<br />  <span>ameaças</span></h1>
            <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-3xl flex flex-col gap-5">
              <li>1. STARTUPS</li>
              <li>2. CONCORRÊNCIA</li>
              <li>3. NECESSIDADE</li>
              <li>4. DECADÊNCIA DIGITAL</li>
            </ol>
          </div>
          
        </div>
      </div>
    </div>
  </Slide>
  
  <!--<Slide animate>-->
  <!--  <h2 style="text-shadow: 0 10px 20px green;"-->
  <!--    class="font-bold m-10 flex justify-center items-center text-green-600 gap-5 text-5xl">-->
  <!--    <FilterIcon size="40" />FUNIL DE VENDAS-->
  <!--  </h2>-->
  <!--  <div class="flex justify-center items-center relative">-->
  <!--    <p class="absolute underline top-0 text-2xl left-0 p-5">topo do funil</p>-->
  <!--    <p class="absolute bottom-0 underline text-2xl left-0 p-5">fundo do funil</p>-->
  <!--    <div class="flex flex-col justify-around items-center p-5 flex rounded-br-full rounded-bl-full bg-[#758BFD]">-->
  <!--      <h2 class="p-5 text-4xl">LEADS -> NECESSIDADE</h2>-->
  <!--      <h2 class="p-5 text-4xl">-->
  <!--        VISITANTES -> INTERESSE-->
  <!--      </h2>-->
  <!--      <h2 class="p-5 text-4xl">POSSÍVEIS COMPRADORES -> BENEFÍCIOS</h2>-->
  <!--      <h2 class="p-5 text-4xl">COMPRADORES -> NEGOCIAÇÃO</h2>-->
  <!--      <h2 class="p-5 text-4xl">CLIENTES -> LEALDADE</h2>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--</Slide>-->
  
  <!--<Slide animate>-->
  <!--  <h2 style="text-shadow: 0 10px 20px green;"-->
  <!--    class="font-bold m-10 flex justify-center items-center text-green-600 gap-5 text-5xl">-->
  <!--    <ToolIcon size="40" />ESTRUTURA-->
  <!--  </h2>-->
  <!--  <div class="flex">-->
  <!--    <div class="flex flex-col justify-center items-center p-5 flex m-10 rounded-tr-full rounded-bl-full bg-[#758BFD]">-->
  <!--      <h1 class="p-5 text-5xl">SETOR DE PRODUÇÃO</h1>-->
  <!--      <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl flex flex-col gap-5">-->
  <!--        <li>1. Desenvolvimento</li>-->
  <!--        <li>2. UI/UX design</li>-->
  <!--        <li>3. Administração de conteúdo</li>-->
  <!--        <li>4. Monitoria </li>-->
  <!--      </ol>-->
  <!--    </div>-->
  <!--    <div class="flex flex-col justify-center items-center p-5 flex m-10 rounded-tr-full rounded-bl-full bg-[#758BFD]">-->
  <!--      <h1 class="p-5 text-5xl">SETOR DE RECURSOS</h1>-->
  <!--      <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl flex flex-col gap-5">-->
  <!--        <li>1. Contabilidade</li>-->
  <!--        <li>2. Mídias Digitais</li>-->
  <!--        <li>3. Suporte</li>-->
  <!--        <li>4. Feedback </li>-->
  <!--      </ol>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--</Slide>-->
  <!--<Slide animate>-->
  <!--  <h2 style="text-shadow: 0 10px 20px green;"-->
  <!--    class="font-bold m-10 flex justify-center items-center text-green-600 gap-5 text-5xl">-->
  <!--    <ToolIcon size="40" />ESTRUTURA-->
  <!--  </h2>-->
  <!--  <div class="flex justify-center items-center">-->
  <!--    <div class="flex flex-col justify-center items-center p-5 flex rounded-tr-full rounded-bl-full bg-[#758BFD]">-->
  <!--      <h1 class="p-5 text-5xl">AINDA FALANDO SOBRE ESTRUTURA , Nós somos uma sociedade limitada em que cada-->
  <!--        colaborador têm por direito:</h1>-->
  <!--      <h2 class="text-1xl"></h2>-->
  <!--      <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl flex flex-col gap-5">-->
  <!--        <li>1. Porcentagem patrimonial</li>-->
  <!--        <li>2. Cotas mensais de acordo com a renda bruta da empresa</li>-->
  <!--        <li>3. Opinião relevante em relação aos planos de negócio e o brainstorm</li>-->
  <!--      </ol>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--</Slide>-->
    <Slide animate>
    <h2 style="text-shadow: 0 10px 20px green;"
      class="font-bold m-10 flex justify-center items-center text-green-600 gap-5 text-5xl font-header">
      <Share2Icon size="40" />EQUIPE
    </h2>
    <div class="flex justify-center items-center">
      <div class="flex flex-col justify-center items-center p-5 flex rounded-b-xl bg-[#758BFD]">
        <h1 class="p-5 text-5xl">Nossa equipe é composta por 3 pessoas físicas que exercem das mais variadas <span class="font-light font-highlight">funções</span> dentro da empresa, dentre esse s estão:</h1>
        <h2 class="text-1xl"></h2>
        <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl flex flex-col gap-5">
          <li>1. FRANCISNÍ GOMES, DESENVOLVEDOR</li>
          <li>2. FELYPE EMANUEL, DESIGNER DE INTERFACE</li>
          <li>3. MATHEUS, ADM DE CONTEÚDO</li>
        </ol>
      </div>
    </div>
  </Slide>
    <Slide animate class="flex">
    <div class="flex gap-5 justify-around items-center">
      <div class=" gap-5 p-5 flex flex-col justify-around items-center bg-[#758BFD] px-5 rounded-t-xl">
        <h1 class="text-7xl font-bold font-header text-start w-[70vw]">MUITO <br /> OBRIGADO!</h1>
      </div>
    </div>
    <!--<div class="p-5">-->
    <!--  <h2 class="font-bold text-3xl">"Antes de ser ótimo em algo Eu preciso ser bom, antes de ser bom Eu preciso ser ruim, e antes de ser ruim tudo o que precisava era ter COMEÇADO"</h2>-->
    <!--</div>-->
            <img class="w-[76vw] mx-auto rounded-b-xl"
          src="https://res.cloudinary.com/dwvmkvvrl/image/upload/v1694876883/wwloty1k6j3kld52kipz.png"
          alt="logo" /> <sup>de</sup>
    <a href="mailto:creastatic@gmail.com" class="py-10 text-xl flex items-center text-green-200 justify-center gap-5 overline">
      <HelpCircleIcon /> Alguma dúvida, envie-nos um email
    </a>
        <a href="https://discord.gg/YMygZ37f" class=" text-xl flex items-center text-green-200 justify-center gap-5 overline">
      <HelpCircleIcon /> Alguma dúvida, comunique-se no discord
    </a>
  </Slide>
</Presentation>