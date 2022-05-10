import { useUpdateNewsMutation } from "./../services/newsApi";
import { News } from "../model/news.model";

const UpateNews = ({ news }: { news: News }) => {

  const [updateNews] = useUpdateNewsMutation();

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

  const HandleClick = async (news: News) => {
    // console.log(news)

    const randomIndex = Math.floor(Math.random() * category.length);
   
      const updateData = {
      id: news.id,
      title: `${news.title}-${news.id}`,
      description: `${news.description}-${news.id}`,
      category: category[randomIndex],
      };
      
        await updateNews(updateData);
  };
  

  return (
    <div
      className="btn btn-sm btn-light border"
      onClick={() => HandleClick(news)}
      //style={{ marginBottom: 50 }}
    >
      Edit
    </div>
  );
};

export default UpateNews;
