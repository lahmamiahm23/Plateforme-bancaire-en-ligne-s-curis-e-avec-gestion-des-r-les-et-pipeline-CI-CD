import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function PiedDePage() {
  return (
      <Box
          component="footer"
          sx={{
            backgroundColor: (theme) =>
                theme.palette.mode === "light"
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
            p: 6,
          }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                À Propos de Nous
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nous visons toujours à fournir un service bancaire supérieur et proactif à un marché de niche mondial, tout en offrant des services rentables et réactifs.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contactez-Nous
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Siège Social Wafasalaf, Casablanca, Maroc
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: contact@wafasalaf.ma
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Téléphone: +212 5 22 95 95 95
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Suivez-Nous
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                  sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Droits d'auteur © "}
              <Link color="inherit" href="https://wafasalaf.ma/">
                2024 Wafasalaf. Tous droits réservés
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
  );
}
