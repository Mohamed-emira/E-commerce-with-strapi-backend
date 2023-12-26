import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function ProductDetails() {
  return (
    <Box sx={{display:'flex',alignItems:'center',gap:2.5,flexDirection:{xs:'column',sm:'row'}}}>
      <Box display={'flex'}>
<img width={300} src="src/Components/images/1/images.jpg" alt=""/>
      </Box>
      <Box sx={{textAlign:{xs:"center",sm:'left'}}}>
<Typography variant="h5">WOMEN'S FASHION</Typography>
<Typography my={0.4}fontSize={'22px'}color={'crimson'}  variant="h5">$12.99</Typography>
<Typography variant="body1">
      Lizards are a widespread group of squamate reptiles,with 
      over 6,000 species,ranging across all continents except
      Antarctia
    </Typography>
    <Stack sx={{justifyContent:{xs:'center',sm:'left'}}} direction={'row'} gap={1} my={2}>
{['src/Components/images/1/final.png','src/Components/images/2/2.jpg'].map((item)=>{
return(
  <img style={{borderRadius:3}}width={90}height={100} key={item} src={item}alt=""/>)
})}
    </Stack>
    <Button
    sx={{mb:{xs:1,sm:0},textTransform:"capitalize"}}
    variant='contained'
    >
<AddShoppingCartOutlined sx={{mr:1} } fontSize="small"/>
Buy now
    </Button>
      </Box>
    </Box>
  )
}
