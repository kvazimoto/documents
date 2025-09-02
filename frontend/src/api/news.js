import instance from "./axios"; 

export const getNews = (tag = "all") => {
    if (tag === "all") {
        return instance.get("/news/");
    }
    return instance.get(`/news/?tag=${tag}`);
};

export const getTags = () => {
    return instance.get("/news/tags/");
};

export const getNewsDetail = (id) => {
    return instance.get(`/news/${id}/`);
};
