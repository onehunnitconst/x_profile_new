'use client';

import {
  Typography,
  Avatar,
  Container,
  Stack,
  Box,
  Button,
} from '@mui/material';
import GameCard from '@/components/game-card';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/navigation';

export default function XView() {
  const router = useRouter();

  return (
    <Container>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack alignItems={{ xs: 'center', md: 'start' }} spacing={1}>
            <Avatar
              alt="Profile Picture"
              src="/images/current_profile.jpg"
              sx={{
                width: 150,
                height: 150,
                marginBottom: 2,
                border: '2px solid lightgrey',
              }}
            />
            <Stack alignItems={{ xs: 'center', md: 'start' }} spacing={1}>
              <Typography variant="h5" fontWeight={700}>
                뚜
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                sx={{ textTransform: 'none' }}
                onClick={() => {
                  router.push('https://x.com/onehunnitconst');
                }}
              >
                <Typography>@onehunnitconst</Typography>
              </Button>
              <Box sx={{ backgroundColor: 'lightgrey', borderRadius: 2, p: 2 }}>
              <Typography variant="body2">
                리듬게임, 볼더링, 개발 이것저것
              </Typography>
              </Box>

            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ mb: { xs: 4 } }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            리듬게임
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/iidx.jpg"
                  subImageSrc="/images/iidx_qpro.png"
                  title="비트매니아 IIDX"
                  subtitle="OHC"
                  contents="SP 중전 / DP 7단"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/popn.jpg"
                  subImageSrc="/images/popn_chara.png"
                  title="팝픈뮤직"
                  subtitle="OHC"
                  contents="팝클래스 99.40+"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/sdvx.jpg"
                  title="사운드 볼텍스"
                  subtitle="OHC"
                  contents="볼포스 20.2+"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/ddr.jpg"
                  title="DDR"
                  subtitle="OHC"
                  contents="SP / DP Newbie"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/maimai.jpg"
                  subImageSrc='/images/maimai_chara.png'
                  title="마이마이 DX"
                  subtitle="OHC"
                  contents="레이팅 14700+"
                />
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              그 외 관심사
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/board.jpeg"
                  title="보드게임"
                  contents="웨이트 3 수준의 전략게임 (아크노바, 테라포밍 마스 등)"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/mahjong.jpeg"
                  title="마작"
                  contents="작혼 작사2 / 오프탁 친선전 선호"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/bouldering.jpg"
                  title="볼더링 (클라이밍)"
                  contents="V3~V4"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/docker.png"
                  title="웹 개발"
                  contents="백엔드 개발, 클라우드 인프라 설계"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
