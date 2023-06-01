import QuestionMark from './QuestionMark.svg';

interface QuestionMarkHeaderProps {
  label: string;
}
export const QuestionMarkHeader = ({ label }: QuestionMarkHeaderProps) => (
  <h1 className='flex items-center justify-between font-semibold'>
    {label}
    <span className='cursor-pointer rounded-2xl bg-black/[0.38] p-3.5 hover:bg-black/[0.18]'>
      <img src={QuestionMark} />
    </span>
  </h1>
);