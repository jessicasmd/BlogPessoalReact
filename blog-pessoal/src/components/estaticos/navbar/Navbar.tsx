import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';


function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" style={{backgroundColor: "violet"}}>
                    <Box style={{ cursor: "pointer"}}>
                        <Typography variant="h3" color="inherit">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer", justifyContent:"center" }}>
                            <Typography variant="h6" color="inherit">
                                -Home-
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", justifyContent:"center" }}>
                            <Typography variant="h6" color="inherit">
                                -Postagens-
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", justifyContent:"center"  }}>
                            <Typography variant="h6" color="inherit">
                                -Temas-
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", justifyContent:"center"  }}>
                            <Typography variant="h6" color="inherit">
                                -Cadastrar Tema-
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ justifyContent: "space-between", cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit"  >
                                  Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;