import { useState } from 'react';
import { Home, Face, Science, School, Mic, Menu, ArrowBack} from '@mui/icons-material';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const menu = [
    { title: 'トップ', icon: Home },
    { title:'自己紹介', icon: Face, href: '#introduction' },
    { title:'研究業績', icon: Science, href: '#works-list' },
    { title:'学歴', icon: School, href: '#educations-list' },
    { title: 'インタビュー', icon: Mic, href:'#interviews-list' },
];

export const MaterialDrawer = () => {
    const [show, setShow] = useState(false);
    const handleDraw = () => setShow(!show);

    return (
        <>
        <Button onClick={handleDraw} startIcon={<Menu  sx={{ color: 'black' }} />}></Button>
        <Drawer anchor="left" open={show} hideBackdrop={true}>
            <Box sx={{ height: '100vh'}}>
                <Box sx={{display:'flex', alignItems:'center', p: 2}}>
                    <Button onClick={() => setShow(false)} startIcon={<ArrowBack sx={{ color: 'black' }}/>} />
                </Box>
                <List>
                    {menu.map(obj => {
                        const isTop = obj.title === 'トップ';
                        const Icon = obj.icon;
                        return (
                            <ListItem key={obj.title}>
                                <ListItemButton onClick={() => {
                                    if (isTop){
                                        scrollToTop();
                                        } else if (obj.href){
                                            window.location.href = obj.href;
                                        }
                                    setShow(false);
                                    }   
                                }>   
                                    <ListItemIcon><Icon /></ListItemIcon>
                                    <ListItemText primary={obj.title} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
        </Drawer>
        </>
    )
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // スムーズにスクロール！
    });
};
