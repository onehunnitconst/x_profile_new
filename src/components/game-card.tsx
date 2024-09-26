import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';

type GameCardProps = {
  imageSrc: string;
  title: string;
  subtitle?: string;
  subImageSrc?: string;
  contents: string;
};

export default function GameCard({
  imageSrc,
  title,
  subtitle,
  subImageSrc,
  contents,
}: GameCardProps) {
  return (
    <Card sx={{ borderRadius: 3, position: 'relative' }}>
      <Box
        component="img"
        src={imageSrc}
        sx={{ width: '100%', height: '100px', objectFit: 'cover' }}
      />
      <CardContent>
        <Stack spacing={0.5}>
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="subtitle2" fontWeight={400}>
              {subtitle}
            </Typography>
          )}
          <Typography variant="subtitle2" fontWeight={400}>
            {contents}
          </Typography>
        </Stack>
      </CardContent>
      {subImageSrc && <Box
        component="img"
        src={subImageSrc}
        sx={{
          height: '80px',
          objectFit: 'cover',
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
      />}
    </Card>
  );
}
