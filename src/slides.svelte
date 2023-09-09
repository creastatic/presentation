<script lang="ts">
  import { Presentation, Slide, Stack, Step } from '@components'
  import {InfoIcon, LayersIcon, ThumbsUpIcon, ToolIcon, UsersIcon} from 'svelte-feather-icons'
</script>

<Presentation>
  <Slide animate class="flex">
    <div class="flex">
      <div class=" p-5 ">
        <img class="w-[40vw] rounded-full"
          src="https://res.cloudinary.com/dt2se4cle/image/upload/v1693762648/Adobe_Express_20230901_1750260_1_orzusk.png"
          alt="" />
      </div>
      <div style="text-shadow: 0 10px 20px black;"
        class="bg-[#758BFD] w-full flex items-center justify-center font-bold m-10 rounded-tr-full rounded-bl-full text-6xl">
        CREASTATIC
      </div>
    </div>
    <div class="p-10">
      <h2 class="font-bold text-5xl">CONHEÇA A NOSSA PROPOSTA</h2>
    </div>
    
    <span class="py-10 text-xl flex items-center justify-center gap-5 overline">
      <InfoIcon /> Deslize para a esquerda ou clique no botão do canto inferior direito para passar os slides
    </span>
  </Slide>
  <Slide animate>
    <div class="gap-20">
      <h2 class="font-bold m-10 flex justify-center items-center text-[#08FFD0] gap-5 text-5xl">
        <LayersIcon size="40" />SUMÁRIO
      </h2>
      <div class="p-5 m-10 rounded-tr-full rounded-bl-full bg-[#758BFD]">
        <ul style="text-shadow: 0 10px 20px black;" class="flex text-xl gap-5 p-5">
          <li>1. O que somos</li>
          <li>2. Estrutura</li>
          <li>4. Análise SWOT</li>
          <li>3. Missão, Visão e Valores</li>
          <li>5. Informações Adicionais</li>
          <li>6. Equipe</li>
        </ul>
      </div>
    </div>
  </Slide>
  <Slide animate>
    <div class="gap-20">
      <h2 class="font-bold m-10 flex justify-center items-center text-[#08FFD0] gap-5 text-5xl">
        <UsersIcon size="40" />O QUE SOMOS?
      </h2>
      <div class="p-5 m-10 rounded-tr-full rounded-bl-full bg-[#758BFD]">
        <h3 style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl">
          A CREASTATIC é uma empresa virtual (E-business), aberta sempre a evolução e ao profissionalismo. Nós somos uma
          empresa com foco na criação de web apps estáticos, e viemos para resolver um problema muito comum no mundo
          web: "A falta de profissionalismo e progressividade em sites estáticos"
        </h3>
      </div>
    </div>
  </Slide>
  <Slide animate>
    <div class="gap-20">
      <h2 class="font-bold m-10 flex justify-center items-center text-[#08FFD0] gap-5 text-5xl">
        <UsersIcon size="40" />O QUE SOMOS?
      </h2>
      <div class="p-5 m-10 rounded-tr-full rounded-bl-full bg-[#758BFD]">
        <h3 style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl">
          "PROFISSIONALISMO" é a palavra chave de nossos produtos e serviços. Nossas criações são modernas e
          profissionais tal comos temos funções específicas para cada indivíduo em nossos setores, Eles apresentados no
          próximo slide
        </h3>
      </div>
    </div>
  </Slide>
  <Slide animate>
    <h2 class="font-bold m-10 flex justify-center items-center text-[#08FFD0] gap-5 text-5xl">
      <ToolIcon size="40" />ESTRUTURA
    </h2>
    <Stack class="flex flex-col items-center justify-center">
      <div class="flex">
        <div
          class="flex flex-col justify-center items-center p-5 flex m-10 rounded-tr-full rounded-bl-full bg-[#758BFD]">
          <h1 class="p-5 text-5xl">SETOR DE PRODUÇÃO</h1>
          <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl flex flex-col gap-5">
            <li>1. Desenvolvimento</li>
            <li>2. UI/UX design</li>
            <li>3. Administração de conteúdo</li>
            <li>4. Monitoria </li>
          </ol>
        </div>
        <div
          class="flex flex-col justify-center items-center p-5 flex m-10 rounded-tr-full rounded-bl-full bg-[#758BFD]">
          <h1 class="p-5 text-5xl">SETOR DE RECURSOS</h1>
          <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl flex flex-col gap-5">
            <li>1. Contabilidade</li>
            <li>2. Mídias Digitais</li>
            <li>3. Suporte</li>
            <li>4. Feedback </li>
          </ol>
        </div>
      </div>
      <Step fadeUp class="absolute z-20 gap-10  h-full rounded-xl w-full bg-[#758BFD] p-5">
        <p class="text-5xl">AINDA FALANDO SOBRE ESTRUTURA , Nós somos uma sociedade limitada em que cada colaborador têm
          por direito:</p>
        <ol style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl flex flex-col gap-5">
          <li>1. Porcentagem patrimonial</li>
          <li>2. Cotas mensais de acordo com a renda bruta da empresa</li>
          <li>3. Opinião relevante em relação a planos de negócio e brainstorm</li>
        </ol>
      </Step>
    </Stack>
  </Slide>
  <Slide animate>
    <div class="">
      <div class="flex flex-col justify-center scroll-x-scroll">
          <h2 class="font-bold m-10 flex justify-center items-center text-[#08FFD0] gap-5 text-5xl">
            <LayersIcon size="40" />MISSÃO
          </h2>
                <div class="p-5 m-10 rounded-tr-full rounded-bl-full bg-[#758BFD]">
        <h3 style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl">
          Agregar valor aos clientes com websites estáticos belos e profissionais, com um serviço de qualiade e muito rentável.
        </h3>
      </div>
      </div>
    </div>
  </Slide>
    <Slide animate>
    <div class="">
      <div class="flex flex-col justify-center scroll-x-scroll">
          <h2 class="font-bold m-10 flex justify-center items-center text-[#08FFD0] gap-5 text-5xl">
            <LayersIcon size="40" />VISÃO
          </h2>
                <div class="p-5 m-10 rounded-tr-full rounded-bl-full bg-[#758BFD]">
        <h3 style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl">
          Estar dentre as principais empresas de desenvolvimento web, assim trazendo relevância a marca
        </h3>
      </div>
      </div>
    </div>
  </Slide>
    <Slide animate>
    <div class="">
      <div class="flex flex-col justify-center scroll-x-scroll">
          <h2 class="font-bold m-10 flex justify-center items-center text-[#08FFD0] gap-5 text-5xl">
            <LayersIcon size="40" />VALORES
          </h2>
                <div class="p-5 m-10 rounded-tr-full rounded-bl-full bg-[#758BFD]">
        <h3 style="text-shadow: 0 10px 20px black;" class="p-5 text-1xl">
          Produtividade, Profissionalismo, Modernidade, Proatividade, Responsabilidade, Conectividade e Adaptabilidade
        </h3>
      </div>
      </div>
    </div>
  </Slide>
</Presentation>