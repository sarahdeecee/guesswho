import { Box, ImageList, ImageListItem } from '@mui/material';
import { Character, CharacterPiece } from '../types';

export function Board(props: any) {
  const {cols, items, selected, setSelected} = props;
  const width: number = cols * 164;
  const select = (): void => console.log('select')
  // const select: void = setSelected([
  //   ...selected
  // ])

  return (
    <Box display='flex' width='100vw' sx={{justifyContent: 'center'}} >
      <ImageList gap={10} cols={cols} rowHeight={164} sx={{maxWidth: width}}>
        {items.map((item: CharacterPiece) => (
          <ImageListItem key={item.img} onClick={select}>
            <img
              src={`/images/characters/${item.img}`}
              alt={item.name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
