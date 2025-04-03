
import React from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAdmin } from "@/contexts/AdminContext";
import { toast } from "@/hooks/use-toast";

export const AdminAuth: React.FC = () => {
  const { 
    showAdminTools, 
    adminPassword, 
    inputPassword, 
    setInputPassword, 
    handleAdminAuth, 
    handleSetPassword, 
    handleLogout 
  } = useAdmin();

  return (
    <Card className="p-6 mb-6">
      {!adminPassword ? (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Set Admin Password</h3>
          <p className="text-sm text-gray-500">
            Create a password to protect the admin tools. This will be stored locally in your browser.
          </p>
          <div className="flex gap-2">
            <Input 
              type="password" 
              placeholder="Set a password" 
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <Button onClick={handleSetPassword}>Set Password</Button>
          </div>
        </div>
      ) : !showAdminTools ? (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Admin Login</h3>
          <div className="flex gap-2">
            <Input 
              type="password" 
              placeholder="Enter admin password" 
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <Button onClick={handleAdminAuth}>Login</Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Admin Tools</h3>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Use these tools to manage content. When you're done, click "Logout" to hide the admin tools.
          </p>
          <div className="flex gap-2">
            <Button 
              variant="destructive" 
              size="sm" 
              onClick={() => {
                localStorage.removeItem('resourceAdminPassword');
                toast({
                  title: "Success",
                  description: "Admin access removed"
                });
                window.location.reload();
              }}
            >
              Delete Admin Access
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};
