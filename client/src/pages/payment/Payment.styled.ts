import { styled } from 'styled-components';

export const Styled_Payment = {
  Content: styled.div`
    display: flex;
    flex-flow: column;
    width: 1300px;

    & > .redButton {
      display: flex;
      justify-content: end;
      margin-top: 42px;
    }
  `,
  Address: styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--category-color);
    }
    & > .shipping-address {
      width: 722px;
      height: 472px;
    }
    & > .orderer-info {
      display: flex;
      flex-flow: column;
      width: 525px;
      height: 472px;
    }
  `,
  Table: styled.table`
    font-size: var(--basic-font-size);
    text-align: center;
    line-height: 34px;
    border-collapse: collapse; //표 테두리 삭제
    table-layout: fixed; //테이블 크기 고정

    &#shipping-address-table {
      width: 650px;
      height: 350px;
    }
    &#orderer-info-table {
      width: 453px;
      height: 280px;
    }

    & td {
      /* border: solid 1px black; */
      text-align: left;
    }
  `,
  SubTitle: styled.div`
    width: 453px;
    margin-bottom: 20px;
    & > h2 {
      margin: 15px 0;
    }
    & input,
    label {
      margin-right: 10px;
    }
  `,
  BookInfo: styled.div`
    margin-top: 30px;
    min-height: 150px;
    background-color: var(--category-color);
    font-size: var(--basic-font-size);
    padding: 35px;
  `,
  AdrBtn: styled.button`
    width: 109px;
    height: 40px;
    margin-left: 20px;
    font-size: var(--input-font-size);
    border: 1px solid var(--light-gray-color);

    &:hover {
      cursor: pointer;
    }
  `,
};
