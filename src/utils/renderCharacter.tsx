import Image from "next/image";
import { accessoriesDate } from "@/data/accessories";
import { clothesData } from "@/data/clothes";
import Boy from "@/assets/characters/boy.png";
import Girl from "@/assets/characters/girl.png";

interface CharacterProps {
  gender: "man" | "woman";
  clothes: string;
  accessories: string;
  topStyle?: string;
}

export const renderCharacter = ({
  gender,
  clothes,
  accessories,
  topStyle = "",
}: CharacterProps) => {
  const base = gender === "man" ? Boy : Girl;

  const clothesObj = clothesData.find((item) => item.name === clothes);
  const accessoryObj = accessoriesDate.find(
    (item) => item.name === accessories,
  );

  return (
    <div className={`absolute ${topStyle}`} style={{ width: 250, height: 250 }}>
      <Image src={base} alt="base" width={250} height={250} />

      {clothesObj?.image && (
        <Image
          src={clothesObj.image}
          alt="clothes"
          width={250}
          height={250}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      )}

      {accessoryObj?.image && (
        <Image
          src={accessoryObj.image}
          alt="accessory"
          width={250}
          height={250}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      )}
    </div>
  );
};
