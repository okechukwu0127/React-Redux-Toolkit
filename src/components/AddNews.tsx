// eslint-disable-next-line
import { useAddNewsMutation, useNewsQuery } from "../services/newsApi";
import { News } from "../model/news.model";

const AddNews = ({ news }: { news: News[] }) => {
  const [addNews] = useAddNewsMutation();
  //const { refetch } = useNewsQuery();

  const category = [
    "sports",
    "entertainment",
    "animals",
    "music",
    "insects",
    "business",
    "technology",
    "AI",
    "internet",
  ];

  const HandleClick = async (news: News[]) => {
    const randomIndex = Math.floor(Math.random() * category.length);
    let id = news?.length || 0;
    id = id + 1;
    const newData = {
      id: id,
      title: `News Article ${id}`,
      description: `Description ${id}`,
      category: category[randomIndex],
    };
    //console.log(newData);
    await addNews(newData);
    //refetch()
  };

  return (
    <div
      className="btn btn-lg btn-warning border"
      onClick={() => HandleClick(news)}
      style={{ marginBottom: 50 }}
    >
      Add New
    </div>
  );
};

export default AddNews;
