"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );

    const data = await response.json();

    setAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log(anime);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={anime} />
      <Pagination
        page={page}
        lastPage={anime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
