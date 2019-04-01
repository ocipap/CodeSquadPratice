(defun HelloName()
(setq name (read-line))
(princ (concatenate 'string "Hello " name)))
(HelloName)