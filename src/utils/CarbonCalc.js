export const estimateCarbon = (tree) => {
  // 基于树高、冠幅、种类的简化模型
  return (
    tree.height *
    tree.crownWidth *
    { 松树: 1.2, 橡树: 1.5, 杉木: 1.0 }[tree.species]
  );
};
