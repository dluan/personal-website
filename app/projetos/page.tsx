import PageHeader from '@/components/PageHeader'
import SkipNavigation from '@/components/navigations/SkipNavigation'
import ProjectPizzaria from '@/components/projects/Pizzaria'
import ProjectRealState from '@/components/projects/RealState'
import ProjectSaposEfadas from '@/components/projects/SaposEfadas'

export const metadata = {
  title: 'Projetos'
}

export default function Projetos() {
  return (
    <>
      <SkipNavigation />
      <PageHeader title="Projetos" description="Amostras de meus trabalhos relacionados ao front-end" />
      <div className="scroll-mt-[86px]" id="main-contents">
        <div className="flex flex-col space-y-10 font-plusjakartasans">
          <ProjectSaposEfadas />
          <ProjectPizzaria />
          <ProjectRealState />
        </div>
      </div>
    </>
  )
}
