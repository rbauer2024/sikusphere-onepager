import dynamic from 'next/dynamic'

const ModelViewer = dynamic(() => import('../components/ModelViewer'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">SIKUSPHERE 3D Ansicht</h1>
      <div className="w-full h-[80vh]">
        <ModelViewer />
      </div>
    </div>
  );
}
