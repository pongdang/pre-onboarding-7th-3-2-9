import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Fragment } from 'react';
import { useUserAccountList } from '../../hooks/useUser';

export function AccountList() {
  const accountList = useUserAccountList();

  // eslint-disable-next-line eqeqeq
  if (accountList == null) {
    return <p>없어요</p>;
  }
  return (
    <Container>
      <ul className="grid-column-9" css={accountInfo}>
        <li>고객명</li>
        <li>브로커명</li>
        <li>계좌번호</li>
        <li>계좌상태</li>
        <li>계좌명</li>
        <li>평가금액</li>
        <li>입금금액</li>
        <li>계좌활성화여부</li>
        <li>계좌개설일</li>
        {accountList.map((account, index) => (
          <Fragment key={`${account.id}-${index}`}>
            <li>{account.user_id}</li>
            <li>{account.broker_id}</li>
            <li>{account.number}</li>
            <li>{account.status}</li>
            <li>{account.name}</li>
            <li>{account.assets}</li>
            <li>{account.payments}</li>
            <li>{String(account.is_active)}</li>
            <li>{account.created_at}</li>
          </Fragment>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.section`
  border-radius: 4px;
`;

const accountInfo = css`
  li:nth-of-type(1),
  li:nth-of-type(2),
  li:nth-of-type(3),
  li:nth-of-type(4),
  li:nth-of-type(5),
  li:nth-of-type(6),
  li:nth-of-type(7),
  li:nth-of-type(8),
  li:nth-of-type(9) {
    background-color: #fafafa;
  }

  li {
    padding: 10px;
  }

  li + li:not(:nth-of-type(9n + 1)) {
    border-left: 1px solid;
  }

  li + li {
    border-bottom: 1px solid;
  }
`;
