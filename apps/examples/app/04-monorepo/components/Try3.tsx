import { Profile } from '@repo/ui-tailwind/Profile'

export const Try3 = () => {
  return (
    <div>
      {/* 패키지의 변경이 바로 적용 -> 컴포넌트 소비 측에도 즉시 대응이 요구 */}
      <Profile name="John" age={20} />
      {/* <Profile user={{ name: 'John', age: 20 }} /> */}
    </div>
  )
}
