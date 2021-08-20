import UIkit from "uikit";

const STATUS_ICONS = {
  success: "<span uk-icon='icon: check'></span>",
  error: "<span uk-icon='icon: warning'></span>",
};

const STATUS_MAPPINGS = {
  success: "success",
  error: "danger",
};

export default function useNotification() {
  return {
    notification: ({ status, message }) => {
      UIkit.notification(`${STATUS_ICONS[status]} ${message}`, {
        status: STATUS_MAPPINGS[status],
      });
    },
  };
}
