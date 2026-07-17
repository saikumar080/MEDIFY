import  {Box, Typography } from "@mui/material"
const CategoryCard=({icon, title,active=false})=>{
    return(
        <Box sx={{width:"100%",height:120,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",bgcolor: active ? "primary.light" : "background.paper", border:1, borderColor:active ? "primary.main" : "divider",borderRadius:2,cursor:"pointer",transition : ".3s", "&:hover" :{ borderColor:"primary.main", transform:"translateY(-2px)"}}}>
            <Box component="img" src={icon} alt={title} sx={{width:42, height:42, mb:1.5}} />
            <Typography variant="body1"  sx={{fontSize:15, fontWeight: active ? 600 : 500, color:active ?"primary.main" : "text.secondary"}}>
                {title}
            </Typography>
        </Box>
    )
}
export default CategoryCard;