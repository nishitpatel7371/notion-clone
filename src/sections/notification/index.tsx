import {notificationList} from "@/data";
import {Button} from "@/components/ui/button";
import {Check, X} from "lucide-react";
import {useState} from "react";

const NotificationSection = () => {
    const [notifications, setNotifications] = useState(notificationList)

    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n => n.id === id ? {...n, read: true} : n))
    }

    const deleteNotification = (id: number) => {
        setNotifications(notifications.filter(n => n.id !== id))
    }

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Notifications</h2>
            <div className="space-y-4">
                {notificationList.map((notification) => (
                    <div
                        key={notification.id}
                        className={`flex items-start justify-between rounded-lg border p-4 ${
                            notification.read ? 'bg-background' : 'bg-muted'
                        }`}
                    >
                        <div className="space-y-1">
                            <h3 className="font-medium">{notification.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {notification.description}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {notification.time}
                            </p>
                        </div>
                        <div className="flex space-x-2">
                            {!notification.read && (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => markAsRead(notification.id)}
                                >
                                    <Check className="h-4 w-4"/>
                                    <span className="sr-only">Mark as read</span>
                                </Button>
                            )}
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => deleteNotification(notification.id)}
                            >
                                <X className="h-4 w-4"/>
                                <span className="sr-only">Delete notification</span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default NotificationSection;