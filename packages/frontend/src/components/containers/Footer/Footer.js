import {ReactComponent as NextIcon} from '../../../assests/next-icon.svg';
import shareIcons from '../../../config/share-icons';
import {useTranslations} from '../../../hooks/useTranslations';
import {openInNewTab} from '../../../utils/browser';
import DynamicIcon from '../../ui/DynamicIcon/DynamicIcon';
import * as S from './Footer.style';

const Footer = () => {
  const t = useTranslations('footer');

  const handleIconClick = iconData => {
    openInNewTab(iconData.link);
  };

  return (
    <S.FooterContainer>
      <S.IconContainer>
        <NextIcon />
      </S.IconContainer>
      <S.FooterTitle>{t.title}</S.FooterTitle>
      <S.SupportDetails>
        <S.Email>{t.supportDetails.email}</S.Email>
        <S.OpeningHours>{t.supportDetails.openingHours}</S.OpeningHours>
      </S.SupportDetails>
      <S.FooterShareIcons>
        {shareIcons.map(iconData => (
          <DynamicIcon
            path={iconData.iconPath}
            key={iconData.id}
            onClick={() => handleIconClick(iconData)}
          />
        ))}
      </S.FooterShareIcons>
    </S.FooterContainer>
  );
};

export default Footer;
