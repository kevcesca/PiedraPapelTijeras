
import React from 'react'
import styles from './Cards'
import { Grid } from "@mui/material";

export default function Cards({img, title}) {
    return (
        // A partir de este componente se crean las cards para elegir entra piedra papel o tijeras
        <div className={styles.cardContainer}>
            <Grid container sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }} >
                <Grid item xs={10} sm={3} md={3} lg={3} >
                    <Image
                        className=''
                        // width={250}
                        // height={125}
                        src={img}
                        priority
                    />
                    <Typography sx={{ fontFamily: 'VT323', textAlign: 'center', textDecoration: "none", color: 'white' }} variant="h4" component="div">
                        {title}
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}
