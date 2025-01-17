import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const converKindMessage = (message: string) => {
  switch (message) {
    case `Unauthorized`:
      return `비밀번호가 틀렸어요.\n다시 입력해주세요`;
  }

  return message;
};

export function ErrorAlert({ errorMessage, reset }: { errorMessage: string; reset: () => void }) {
  return (
    <Modal onClick={reset}>
      <Section onClick={e => e.stopPropagation()}>
        <Message>{converKindMessage(errorMessage)}</Message>
        <ErrorResetButton onClick={reset}>확인</ErrorResetButton>
      </Section>
    </Modal>
  );
}

const fadeIn = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0px);
  }
`;

const Modal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  white-space: pre-wrap;
`;

const Section = styled.section`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  margin-top: 20px;
  padding: 42px;
  background-color: #fff;
  z-index: 1;
  animation: ${fadeIn} 0.4s ease-out;
`;

const ErrorResetButton = styled.button`
  display: block;
  display: block;
  border-radius: 20px;
  background-color: #dc602a;
  padding: 12px;
  margin-top: 30px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1.2px;
`;
