import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_Sidebar = {
  Container: styled.div`
    position: fixed;
    top: calc(133px + 58px);
    z-index: 99;

    ${DeviceQuery.bigScreen`
      top: calc((133px + 58px) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      top: calc((133px + 58px) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      top: calc((133px + 58px) / ${screenScale.tablet});
    `}
    ${DeviceQuery.mobile`
      top: calc((133px + 58px) / ${screenScale.mobile});
      width: 100vw;
    `}
  `,

  Div: styled.div`
    width: 215px;
    /* height: calc(100vh - 133px - 58px); */
    height: 100vh;
    background-color: white;

    border-right: 1px solid var(--light-gray-color);

    display: flex;
    flex-flow: column;

    font-size: var(--basic-font-size);
    text-align: center;
    gap: 20px;
    padding-top: 44px;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      width: calc(215px / ${screenScale.bigScreen});
      gap: calc(20px / ${screenScale.bigScreen});
      padding-top: calc(44px / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
      width: calc(215px / ${screenScale.desktop});
      gap: calc(20px / ${screenScale.desktop});
      padding-top: calc(44px / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
      width: calc(215px / ${screenScale.tablet});
      gap: calc(20px / ${screenScale.tablet});
      padding-top: calc(44px / ${screenScale.tablet});
    `}
    ${DeviceQuery.mobile`
      font-size: calc(var(--basic-font-size) / ${screenScale.mobile});
      width: 100%;
      height: fit-content;
      gap: 1rem;
      flex-flow: wrap;
      padding: 1.5rem;
    `}
  `,

  Button: styled.button`
    border: 0;
    background-color: white;
    font-size: var(--basic-font-size);
    cursor: pointer;
    outline: none;

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
    `}
    ${DeviceQuery.tablet`
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
    `}
    ${DeviceQuery.mobile`
      font-size: calc(var(--basic-font-size) / 1.5);
      width: 5rem;
    `}


    &:hover {
      color: var(--primary-background-color);
    }
    &:focus {
      color: var(--primary-background-color);
      font-weight: bold;
    }
  `,
};
