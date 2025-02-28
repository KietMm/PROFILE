import { Avatar as MuiAvatar } from '@mui/material';

interface AvatarProps {
    src: string;
    alt?: string;
    size?: number;
  }
  
  const Avatar = ({ src, alt = "Avatar", size = 50 }: AvatarProps) => {
    return (
      <MuiAvatar
        alt={alt}
        src={src}
        sx={{ width: size, height: size }}
      />
    );
  };
  
  export default Avatar;
  