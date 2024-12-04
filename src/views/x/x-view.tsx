'use client';

import {
  Typography,
  Avatar,
  Container,
  Stack,
  Box,
  Button,
  useTheme,
} from '@mui/material';
import GameCard from '@/components/game-card';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/navigation';

export default function XView() {
  const router = useRouter();

  const theme = useTheme();

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
                color="info"
                sx={{ textTransform: 'none' }}
                onClick={() => {
                  router.push('https://x.com/onehunnitconst');
                }}
              >
                <Typography>@onehunnitconst</Typography>
              </Button>
              <Typography variant="body2" color={theme.palette.text.secondary}>
                * 음악게임 (bemani / chumai / pumpitup) <br />
                * 웹 개발 및 클라우드 인프라 엔지니어 <br />
                * 볼더링, 마작, 보드게임, 방탈출 등
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ mb: { xs: 4 } }}>
          <Typography variant="h6" sx={{ mb: 2 }} fontWeight={700}>
            리듬게임
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/iidx.jpg"
                  title="비트매니아 IIDX"
                  subtitle="OHC"
                  contents="SP 중전 / DP 7단"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        싱글 플레이 (SP) 이력
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2019년부터 시작 <br />
                        - 현재 단위 중전 <br /> <br />
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={700}>
                        더블 플레이 (DP) 이력
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2024년부터 시작 <br />
                        - 현재 단위 7단 <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/popn.jpg"
                  title="팝픈뮤직"
                  subtitle="OHC"
                  contents="팝클래스 99.40+"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        이력
                      </Typography>
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
                      <Typography variant="subtitle2" fontWeight={700}>
                        이력
                      </Typography>
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
                  imageSrc="/images/maimai.jpg"
                  title="마이마이 DX"
                  subtitle="OHC"
                  contents="레이팅 15500+"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        이력
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2024년부터 시작 <br />
                        - 레이팅 15500 <br />
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
                  contents="레이팅 15.10"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        이력
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2024년부터 시작 <br />
                        - 레이팅 15.10 <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/pump.jpeg"
                  title="펌프잇업"
                  subtitle="OHC"
                  contents="INTERMEDIATE LV.7"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        이력
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2024년부터 시작 <br />
                        - INTERMEDIATE LV.7
                        <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }} fontWeight={700}>
              개발
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/docker.png"
                  title="어플리케이션 개발"
                  contents="Node.js, Dart, Python 등을 이용한 웹 및 모바일 어플리케이션 개발"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        경력
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 재직 회사에서 Node.js 기반 웹 서버 개발 담당 <br />
                        - Next.js 기반 웹 애플리케이션 혹은 Flutter 기반 모바일
                        어플리케이션 개발 보조 <br />
                        <br />
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={700}>
                        기술 스택
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 프론트엔드 개발: Flutter, React, Next.js <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Flutter 상태관리: Provider,
                        Riverpod, bloc <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Next.js 상태관리: SWR, Context
                        API, Zustand
                        <br />
                        - 백엔드 개발: NestJS, Express.js, Flask <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- ORM: PrismaORM, TypeORM <br />
                        - 데이터베이스: PostgreSQL, Redis, MongoDB <br />
                        - 테스트/운영/배포: Jest, Docker, Vagrant, Jenkins,
                        NGINX <br />
                        <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/aws.jpeg"
                  title="클라우드 인프라 설계"
                  contents="Amazon Web Service 위주의 클라우드 인프라 구축"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        경력
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 재직 회사에서 서버 개발과 겸하여 클라우드 인프라 구축
                        담당 <br />- Node.js 기반 웹 서버 운용을 위한 인프라
                        구축 업무 <br />
                        <br />
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={700}>
                        기술 스택 (실무 활용)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 애플리케이션: EC2, ECS <br />- 데이터베이스: RDS
                        (PostgreSQL), DynamoDB, ElastiCache <br />
                        - 오브젝트 스토리지: S3 <br />
                        - 기타: ALB, CloudFront, SQS
                        <br />
                        <br />
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }} fontWeight={700}>
              그 외 관심사
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/board.jpeg"
                  title="보드게임"
                  contents="전략 게임, 마피아 게임"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        이력
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2021년부터 시작 <br />
                        - 오프라인 위주, 웨이트 2~3의 전략게임 선호 <br />{' '}
                        <br />
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={700}>
                        보유 게임
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        비뉴스, 아크 노바, 테라포밍 마스, 카네기, 위너스 서클,
                        버건디의 성, 아그리콜라, 윙스팬, 기즈모 등 50종 보유
                      </Typography>
                    </Box>
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <GameCard
                  imageSrc="/images/mahjong.jpeg"
                  title="마작"
                  contents="오프탁 선호 / 작혼 작사2"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        이력
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2024년부터 시작 <br />
                        - 오프마작 선호 <br />
                        <br />
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={700}>
                        작혼 프로필
                      </Typography>
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
                  contents="방수 25+"
                  dialogContents={
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        이력
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2022년부터 시작 <br />
                        - 방탈출 수: 25+ <br />
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
                      <Typography variant="subtitle2" fontWeight={700}>이력</Typography>
                      <Typography variant="body2" color="text.secondary">
                        - 2021년부터 시작
                        <br />- 킬터 V4~5, 자연 V2~3, 더클 빨강
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
