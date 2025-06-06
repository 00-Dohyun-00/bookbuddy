import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../utils/Responsive';

export const Styled_Layout = {
  // 필수
  Container: styled.div`
    display: flex;
    justify-content: center;
    ${DeviceQuery.mobile`
      flex-flow: column;
    `}
  `,
  // 선택(sidebar 있는 경우)
  Div_WithSidebar: styled.div`
    width: 1512px;
    display: flex;

    ${DeviceQuery.bigScreen`
      width: calc(1512px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1512px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1512px / ${screenScale.tablet});
    `}
  `,
  // 선택(sidebar 없는 경우)
  Div_WithNoSidebar: styled.div`
    display: flex;
    justify-content: center;
    width: 1300px;
    padding-top: 60px;

    ${DeviceQuery.bigScreen`
      width: calc(1300px / ${screenScale.bigScreen});
      padding-top: calc(60px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      width: calc(1300px / ${screenScale.desktop});
      padding-top: calc(60px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      width: calc(1300px / ${screenScale.tablet});
      padding-top: calc(60px / ${screenScale.tablet});
    `}
    ${DeviceQuery.mobile`
      width: 100vw;
      padding-top: calc(60px / ${screenScale.mobile});
    `}
  `,
  // H1
  H1: styled.h1`
    font-size: var(--title-font-size);
    margin-bottom: 60px;
    display: inline-block;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--title-font-size) / ${screenScale.bigScreen});
      margin-bottom: calc(60px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--title-font-size) / ${screenScale.desktop});
      margin-bottom: calc(60px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--title-font-size) / ${screenScale.tablet});
      margin-bottom: calc(60px / ${screenScale.tablet});
    `}
    ${DeviceQuery.mobile`
      font-size: calc(var(--title-font-size) / 1.5);
      margin-bottom: calc(60px / ${screenScale.mobile});
      margin-left: 1.3rem;
    `}

    &.noOrderItem {
      width: 1300px;

      ${DeviceQuery.bigScreen`
        width: calc(1300px / ${screenScale.bigScreen});
      `}
      ${DeviceQuery.desktop`
        width: calc(1300px / ${screenScale.desktop});
      `}
      ${DeviceQuery.tablet`
        width: calc(1300px / ${screenScale.tablet});
      `}
      ${DeviceQuery.mobile`
        width: calc(1300px / ${screenScale.mobile});
      `}
    }
  `,
};
