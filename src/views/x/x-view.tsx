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
            비마니
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
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2">싱글 플레이</Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2019년부터 시작 / DP 2024년부터 시작 <br />
                        - 최고 개전 (HV 기준), 현 중전 (EPO 기준) <br />
                      </Typography>
                      <Typography variant="subtitle2">더블 플레이</Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2019년부터 시작 / DP 2024년부터 시작 <br />
                        - 최고 7단 (HV 기준), 현 7단 (EPO 기준) <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/popn.jpg"
                  subImageSrc="/images/popn_chara.png"
                  title="팝픈뮤직"
                  subtitle="OHC"
                  contents="팝클래스 99.40+"
                  dialogContents={
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        - 2014년부터 시작 <br />
                        - 팝클래스 99.40
                        <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/sdvx.jpg"
                  title="사운드 볼텍스"
                  subtitle="OHC"
                  contents="볼포스 20.2+"
                  dialogContents={
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        - 2019년부터 시작 <br />
                        - 볼포스 20.2+
                        <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/ddr.jpg"
                  title="DDR"
                  subtitle="OHC"
                  contents="SP / DP Newbie"
                  dialogContents={
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        - 2024년부터 시작 <br />
                        <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>

            </Grid>
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              게키츄마이
            </Typography>
            <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/maimai.jpg"
                  subImageSrc="/images/maimai_chara.png"
                  title="마이마이 DX"
                  subtitle="OHC"
                  contents="레이팅 15000+"
                  dialogContents={
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        - 2024년부터 시작 <br />
                        - 레이팅 15000+ <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/chunithm.jpeg"
                  title="츄니즘"
                  subtitle="OHC"
                  contents="레이팅 14.2+"
                  dialogContents={
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        - 2024년부터 시작 <br />
                        - 레이팅 14.2+ <br />
                      </Typography>
                    </Box>
                  }
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
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2">이력</Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2021년부터 시작 <br />
                        - 오프라인 위주, 웨이트 2~3의 전략게임 선호 <br />
                      </Typography>
                      <Typography variant="subtitle2">보유 게임</Typography>
                      <Typography variant="body2" color="text.secondary">
                        비뉴스, 아크 노바, 테라포밍 마스, 카네기, 위너스 서클, 버건디의 성, 아그리콜라, 윙스팬, 기즈모 등 50종 보유
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/mahjong.jpeg"
                  title="마작"
                  contents="작혼 작사2 / 오프탁 친선전 선호"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2">이력</Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2024년부터 시작 <br />
                        - 오프마작 선호 <br />
                      </Typography>
                      <Typography variant="subtitle2">작혼 프로필</Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 닉네임: 뚜뚠뚜 (UID: 105775337) <br />
                        - 등급: 작사 2 <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/roomescape.jpg"
                  title="방탈출"
                  contents="20방 뉴비"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2">이력</Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2022년부터 시작, 20방 <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/bouldering.jpg"
                  title="볼더링 (클라이밍)"
                  contents="V3~V4"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2">이력</Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2021년부터 시작 (2024년 3월부터 휴식 중)<br />
                        - 킬터 V4~5, 자연 V2~3, 더클 빨강
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/docker.png"
                  title="웹 개발"
                  contents="백엔드 개발, 클라우드 인프라 설계"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2">이력</Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 풀스택 개발자로 근무 중<br />
                        - 백엔드: Node.js<br />
                        - 프론드엔드: Flutter, Next.js
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
