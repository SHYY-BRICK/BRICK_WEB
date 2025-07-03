export interface InitialEquipment {
  clothes?: string;
  accessory?: string;
}

export const initializeEquipment = (
  defaultItems: InitialEquipment,
  setClothes: (name: string | null) => void,
  setAccessory: (name: string | null) => void,
) => {
  if (defaultItems.clothes) {
    setClothes(defaultItems.clothes);
  }
  if (defaultItems.accessory) {
    setAccessory(defaultItems.accessory);
  }
};
