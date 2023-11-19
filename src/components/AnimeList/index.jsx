import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid sm:grid-cols-3 gap-4 md:grid-cols-4 grid-cols-2 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/${anime.mal_id}`} className="cursor-pointer" key={index}>
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl text-md p-4 text-color-primary">{anime.title}</h3>
          </Link>
        )
      })}
    </div>
  );
};

export default AnimeList;
