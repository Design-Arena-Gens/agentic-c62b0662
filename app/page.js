import Hero from './components/Hero';
import PillarGrid from './components/PillarGrid';
import MissionTimeline from './components/MissionTimeline';
import ModuleRoadmap from './components/ModuleRoadmap';
import JavaScriptBoosters from './components/JavaScriptBoosters';
import AngularScene from './components/AngularScene';
import Playground from './components/Playground';
import Quiz from './components/Quiz';
import MiniProjects from './components/MiniProjects';
import SiteFooter from './components/SiteFooter';

export default function Home() {
  return (
    <main>
      <div style={{ width: '100%', paddingBottom: '100px' }}>
        <Hero />
        <MissionTimeline />
        <ModuleRoadmap />
        <AngularScene />
        <JavaScriptBoosters />
        <Playground />
        <Quiz />
        <PillarGrid />
        <MiniProjects />
        <SiteFooter />
      </div>
    </main>
  );
}
