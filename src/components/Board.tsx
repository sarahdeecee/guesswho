import { Box, ImageList, ImageListItem } from '@mui/material';
import './App.css';
import { Character } from '../types';

export function Board(props: any) {
  const {cols, itemData} = props;
  const width: number = cols * 164;
  return (
    <Box display='flex' width='100vw' sx={{justifyContent: 'center'}} >
      <ImageList gap={10} cols={cols} rowHeight={164} sx={{maxWidth: width}}>
        {itemData.map((item: Character) => (
          <ImageListItem key={item.img}>
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
