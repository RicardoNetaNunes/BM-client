import React from 'react';
import { Link } from 'react-router-dom';
import logoFooter from '../images/logoFooter.png'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import { ColumnToRow, Item } from '@mui-treasury/components/flex';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import {
  CategoryProvider,
  CategoryTitle,
  CategoryItem,
} from '@mui-treasury/components/menu/category';
import { useMagCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/mag';
import { useReadyEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/ready';
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';
import '../Footer.css';

const useStyles = makeStyles(({ palette, typography }) => ({
  top: {
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  middle: {
    backgroundColor: palette.type === 'dark' ? '#192D36' : palette.action.hover,
  },
  bottom: {
    backgroundColor:
      palette.type === 'dark' ? '#0F2128' : palette.action.selected,
  },
  newsletterText: {
    color: '#fff',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
  },
  form: {
    margin: 0,
    minWidth: 343,
    fontSize: '0.875rem',
  },
  legalLink: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    justifyContent: 'center',
    color: palette.text.hint,
    letterSpacing: '0.5px',
  },
  divider: {
    height: 2,
    margin: '-1px 0',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    filter: 'grayscale(80%)',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  info: {
    ...typography.caption,
    color: palette.text.hint,
    marginTop: 8,
  }
}));

const Footer = React.memo(function ArcAppFooter() {
  const classes = useStyles();
  return (
    
      <Box width={'100%'} className="addcolor">
        <Box px={2} py={6} className={classes.top} position={'relative'}>
          <div className={classes.overlay}>
            <img
              src={
                'https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200'
              }
              alt={''}
            />
          </div>
          <ThemeProvider>
            <ColumnToRow
              at={'sm'}
              cssPosition={'relative'}
              columnStyle={{ alignItems: 'center', textAlign: 'center' }}
              rowStyle={{ justifyContent: 'center' }}
              gap={{ xs: 2, sm: 3, md: 4 }}
              wrap
            >
              <Item>
                <Typography className="textInput" >
                  Be the first to know about all our auctions
                </Typography>
              </Item>
              <Item>
                <EmailSubscribe
                  className={classes.form}
                  onSubmit={email => alert(`Your email is ${email}.`)}
                  useStyles={useReadyEmailSubscribeStyles}
                  inputClearedAfterSubmit
                >
                  <EmailTextInput placeholder="Enter your email" />
                  <SubmitButton style={{fontSize:'15px', backgroundColor:"#04435d"}}>Submit</SubmitButton>
                </EmailSubscribe>
              </Item>
            </ColumnToRow>
          </ThemeProvider>
        </Box>
        <Box px={2} py={10} className={classes.middle}>
          <Container disableGutters>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4} lg={3}>
                <Box
                  component={'img'}
                  mt={-3}
                  src={logoFooter}
                  alt=""
                  borderRadius={12}
                />
               
                <Typography className={classes.info}>
                    example@bidmasters.com
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} lg={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        Auctions
                      </CategoryTitle>
                      <CategoryItem>
                        <Link to ="/futureauctions"><h5>Auctions calendar</h5></Link>
                      </CategoryItem>
                      <CategoryItem>
                        <Link to="/closedauctions" ><h5>Closed auctions</h5></Link>
                      </CategoryItem>
                      <CategoryItem>
                      <Link to='/comingSoon'><h5>Catalogues Subscription</h5></Link>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        Services
                      </CategoryTitle>
                      <CategoryItem>
                      <Link to='/comingSoon'><h5>Art expertise</h5></Link>
                      </CategoryItem>
                      <CategoryItem>
                      <Link to='/comingSoon'><h5>Appraisals</h5></Link>
                      </CategoryItem>
                      <CategoryItem>
                      <Link to='/privateauction'><h5>Private Auction</h5></Link>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                  <Grid item xs={5} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        About
                      </CategoryTitle>
                      <CategoryItem>
                      <Link to='/contact'><h5>Contacts</h5></Link>
                      </CategoryItem>
                      <CategoryItem>
                      <Link to='/theteam'><h5>About us</h5></Link>
                      </CategoryItem>
                      <CategoryItem>
                      <Link to='/press'><h5>Press</h5></Link>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                </Grid>
              </Grid>
              
            </Grid>
          </Container>
        </Box>
        <Container disableGutters>
          <Divider className={classes.divider} />
        </Container>
        <Box px={2} py={3} className={classes.bottom}>
          <Container disableGutters>
            <ColumnToRow
              at={'md'}
              columnStyle={{ alignItems: 'center' }}
              rowStyle={{ alignItems: 'unset' }}
            >
              <Item grow ml={-2} shrink={0}>
                <NavMenu useStyles={usePlainNavigationMenuStyles}>
                  <ColumnToRow at={'sm'}>
                    <NavItem className={classes.legalLink}>
                      Terms & Conditions
                    </NavItem>
                    <NavItem className={classes.legalLink}>
                      Privacy Policy
                    </NavItem>
                    
                  </ColumnToRow>
                </NavMenu>
              </Item>
              <Item>
                <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
                {/*   <Typography
                    component={'p'}
                    variant={'caption'}
                    color={'textSecondary'}
                  > */}
                  <NavItem className={classes.legalLink} id="phrase">
                      Created with mui, bootstrap and ant by Inês, Maria and Ricardo © 2021 All rights
                      reserved
                      </NavItem>
                 {/*  </Typography> */}
                </Box>
              </Item>
            </ColumnToRow>
          </Container>
        </Box>
      </Box>
    
  );
});

export default Footer