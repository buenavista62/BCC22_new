const photos = [
  {
    src: './public/nft/2.png',
    width: 4,
    height: 3
  },
  {
    src: './99.png',
    width: 1,
    height: 1
  }
];


export default function Nfts() {
  
    return (
      <Gallery photos={photos} />
    )
  }
  

