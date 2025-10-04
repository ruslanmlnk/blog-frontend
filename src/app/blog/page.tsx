import PreviewList from "../components/article/PreviewList";
import TagsSidebar from "../components/article/TagsSidebar";

export default async function Blog() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8">
        <PreviewList />
      </div>
      <div className="lg:col-span-4">
        {/* Sidebar */}
        <TagsSidebar />
      </div>
    </div>
  );
}
