import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

type GameCardProps = {
  imageSrc: string;
  title: string;
  subtitle?: string;
  subImageSrc?: string;
  contents: string;
  dialogContents?: React.ReactNode;
};

export default function GameCard({
  imageSrc,
  title,
  subtitle,
  subImageSrc,
  contents,
  dialogContents,
}: GameCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <>
      <Dialog open={dialogOpen} fullWidth>
        <Box
          component="img"
          src={imageSrc}
          sx={{ width: '100%', height: '100px', objectFit: 'cover' }}
        />
        <DialogContent>
          <Stack spacing={0.5}>
            <Typography variant="h6" fontWeight={700}>
              {title}
            </Typography>
            {dialogContents}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(ev) => {
              ev.preventDefault();
              setDialogOpen(false);
            }}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
      <Card
        sx={{ borderRadius: 3, position: 'relative' }}
        onClick={(ev) => {
          ev.preventDefault();
          setDialogOpen(true);
        }}
      >
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
        {subImageSrc && (
          <Box
            component="img"
            src={subImageSrc}
            sx={{
              height: {
                lg: '80px',
                md: '40px',
                xs: '80px',
              },
              objectFit: 'cover',
              position: 'absolute',
              bottom: 16,
              right: 16,
            }}
          />
        )}
      </Card>
    </>
  );
}
