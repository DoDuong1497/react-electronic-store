
interface TabItemProps {
  label: string
}

//  isAcive = text-blue-600 bg-gray-100 rounded-t-lg active 
function TabItem({ label }: TabItemProps) {
  return (
    <div 
      className="inline-block p-4 dark:bg-gray-800 dark:text-blue-500"
    >
      {label}
    </div>
  )
}

export default TabItem