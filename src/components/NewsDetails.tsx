import { useSingleNewsQuery } from "./../services/newsApi";

const NewsDetails = ({ id }: { id: number }) => {

    const { data } = useSingleNewsQuery(id)

    return <pre>{JSON.stringify(data,undefined,2)}</pre>;
};

export default NewsDetails;
