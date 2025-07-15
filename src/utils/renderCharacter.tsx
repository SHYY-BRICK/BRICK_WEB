import Image from "next/image";

type RankUser = {
  name: string;
  rank: number;
  amount: number;
  weeks: number;
  gender: "man" | "woman";
  clothes: string;
  accessories: string;
};

export const renderCharacter = (user: RankUser, topStyle: string) => {
  const base = `assets/characters/${
    user.gender === "man" ? "boy" : "girl"
  }.png`;
  const clothes = `assets/clothes/${user.clothes}.png`;
  const acc = `assets/accessories/${user.accessories}.png`;

  return (
    <div className={`absolute ${topStyle}`}>
      <Image src={base} alt="base" width={120} height={120} />
      <Image
        src={clothes}
        alt="clothes"
        width={120}
        height={120}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <Image
        src={acc}
        alt="accessory"
        width={120}
        height={120}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
};
