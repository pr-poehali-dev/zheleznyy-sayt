import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleQRAuth = () => {
    setIsAuthenticated(true);
  };

  const handlePayment = () => {
    setIsPaid(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <Card className="p-8 max-w-md w-full mx-4 text-center shadow-lg border-0">
          <div className="mb-6">
            <Icon
              name="Shield"
              size={48}
              className="mx-auto text-blue-600 mb-4"
            />
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Приватный доступ
            </h1>
            <p className="text-gray-600">Отсканируйте QR-код для входа</p>
          </div>

          <div className="mb-8 p-6 bg-white rounded-2xl border-2 border-gray-100">
            <img
              src="/img/571bc696-68f1-405a-a5c7-8c7d24567902.jpg"
              alt="QR Code"
              className="w-48 h-48 mx-auto"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          <Button
            onClick={handleQRAuth}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
          >
            <Icon name="Scan" size={20} className="mr-2" />
            Войти по QR-коду
          </Button>

          <p className="text-xs text-gray-500 mt-4">
            Доступ только по авторизации
          </p>
        </Card>
      </div>
    );
  }

  if (isPaid) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <Card className="p-8 max-w-md w-full mx-4 text-center shadow-lg border-0">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Оплата завершена
            </h1>
            <p className="text-gray-600">Покажите этот экран</p>
          </div>

          <div className="mb-6 p-6 bg-green-50 rounded-2xl border-2 border-green-100">
            <Icon
              name="CreditCard"
              size={48}
              className="mx-auto text-green-600 mb-3"
            />
            <p className="text-green-800 font-medium">
              Платеж успешно обработан
            </p>
            <p className="text-green-600 text-sm mt-1">
              ID: #{Math.random().toString(36).substr(2, 9)}
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium text-gray-900">
              ✅ Транзакция подтверждена
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date().toLocaleString("ru-RU")}
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <Card className="p-8 max-w-md w-full mx-4 text-center shadow-lg border-0">
        <div className="mb-6">
          <Icon
            name="CreditCard"
            size={48}
            className="mx-auto text-blue-600 mb-4"
          />
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            QR Payment
          </h1>
          <p className="text-gray-600">Безопасная система оплаты</p>
        </div>

        <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">К оплате:</span>
            <span className="text-2xl font-bold text-gray-900">100 ￥</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Комиссия:</span>
            <span>0 ￥</span>
          </div>
        </div>

        <Button
          onClick={handlePayment}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium text-lg transition-all duration-200 hover:scale-105 shadow-lg"
        >
          <Icon name="Smartphone" size={20} className="mr-2" />
          Оплатить
        </Button>

        <div className="flex items-center justify-center mt-6 space-x-4 text-xs text-gray-500">
          <div className="flex items-center">
            <Icon name="Shield" size={14} className="mr-1" />
            Защищено
          </div>
          <div className="flex items-center">
            <Icon name="Lock" size={14} className="mr-1" />
            Шифрование
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
