import { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function SearchBar() {
  const [specialty, setSpecialty] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className="bg-white py-6 -mt-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl p-6 shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={specialty} onValueChange={setSpecialty}>
              <SelectTrigger className="bg-[#F8F9FA] border-gray-200 h-12">
                <SelectValue placeholder="Выберите специальность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiology">Кардиология</SelectItem>
                <SelectItem value="neurology">Неврология</SelectItem>
                <SelectItem value="orthopedics">Ортопедия</SelectItem>
                <SelectItem value="pediatrics">Педиатрия</SelectItem>
                <SelectItem value="therapy">Терапия</SelectItem>
              </SelectContent>
            </Select>

            <Select value={doctor} onValueChange={setDoctor}>
              <SelectTrigger className="bg-[#F8F9FA] border-gray-200 h-12">
                <SelectValue placeholder="Выберите врача" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-ivanov">Доктор Иванов</SelectItem>
                <SelectItem value="dr-petrov">Доктор Петров</SelectItem>
                <SelectItem value="dr-sidorov">Доктор Сидоров</SelectItem>
              </SelectContent>
            </Select>

            <Select value={date} onValueChange={setDate}>
              <SelectTrigger className="bg-[#F8F9FA] border-gray-200 h-12">
                <SelectValue placeholder="Выберите дату" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Сегодня</SelectItem>
                <SelectItem value="tomorrow">Завтра</SelectItem>
                <SelectItem value="week">На этой неделе</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-[#5B4E99] hover:bg-[#3F2A7D] text-white h-12 font-semibold">
              <Search className="w-5 h-5 mr-2" />
              Найти
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
