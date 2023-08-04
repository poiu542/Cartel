import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { loginAction, logoutAction } from './actions'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { BsPersonCircle } from 'react-icons/bs'

import Badge from '@mui/material/Badge'
import Stack from '@mui/material/Stack'
import MailIcon from '@mui/icons-material/Mail'
function NavbarLogin() {
  const isLoggedIn = 0
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // const dispatch = useDispatch();
  const pages = ['상담', '상담사', '공지사항', '커뮤니티']
  const settings = isLoggedIn
    ? ['마이페이지', '로그아웃']
    : ['회원가입', '로그인']
  const notices = ['알림1', '알림2', '알림3', '알림4']
  const userId = 0
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )
  const navigate = useNavigate()

  const handlePageChange = (page: string, userId: number) => {
    if (page === '상담') {
      page = 'counsel'
      navigate(`/${page}`)
    } else if (page === '상담사') {
      page = 'counselor'
      navigate(`/${page}`)
    } else if (page === '공지사항') {
      page = 'notice'
      navigate(`/${page}`)
    } else if (page === '커뮤니티') {
      page = 'freeboard'
      navigate(`/${page}`)
    } else if (page === '마이페이지') {
      page = 'profile'
      navigate(`/${page}/${userId}`)
    } else if (page === '로그아웃') {
      // 로그아웃 로직
    } else if (page === '회원가입') {
      page = 'signup'
      navigate(`/${page}`)
    } else if (page === '로그인') {
      page = 'login'
      navigate(`/${page}`)
    }

    // handleCloseNavMenu()
  }

  const [anchorElNotice, setAnchorElNotice] =
    React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleOpenNoticeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotice(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const handleCloseNoticeMenu = () => {
    setAnchorElNotice(null)
  }
  const main = () => {
    navigate('/')
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 46,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              border: 'solid',
              borderColor: 'black',
            }}
            onClick={main}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page, userId)}
                sx={{
                  my: 2,
                  mr: 7,
                  color: 'black',
                  display: 'block',
                  fontWeight: 'bold',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              <Tooltip title="Open Notice">
                <IconButton onClick={handleOpenNoticeMenu} sx={{ p: 0, mr: 3 }}>
                  <Link to="/alarm/:userId">
                    <NotificationsNoneIcon
                      style={{ width: '40px', height: '40px', color: 'black' }}
                    />
                  </Link>
                </IconButton>
              </Tooltip>
            ) : null}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElNotice}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNotice)}
              onClose={handleCloseNoticeMenu}
            >
              {notices.map((notice) => (
                <MenuItem key={notice} onClick={handleCloseNoticeMenu}>
                  <Typography textAlign="center">{notice}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open user settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* {isLoggedIn && props.profile.image? <img src={props.profile.image} alt="" />  */}
                <BsPersonCircle style={{ width: '40px', height: '40px' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handlePageChange(setting, userId)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavbarLogin
