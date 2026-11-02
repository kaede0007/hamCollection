export const preloadHamsterImages = (totalCount: number = 64) => {
    for (let i = 0; i < totalCount; i++) {
        const img = new Image();
        img.src = `images/hamsimage/ham${i}.webp`;
    }
};